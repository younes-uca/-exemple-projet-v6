package com.ird.faa.service.chercheur.impl;

import com.ird.faa.bean.DisciplineScientifique;
import com.ird.faa.bean.DisciplineScientifiqueErcAssociation;
import com.ird.faa.bean.DisciplineScientifiqueParent;
import com.ird.faa.dao.DisciplineScientifiqueDao;
import com.ird.faa.security.bean.User;
import com.ird.faa.security.common.SecurityUtil;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueChercheurService;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueErcAssociationChercheurService;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueParentChercheurService;
import com.ird.faa.service.core.facade.ArchivableService;
import com.ird.faa.service.core.impl.AbstractServiceImpl;
import com.ird.faa.service.util.ListUtil;
import com.ird.faa.service.util.SearchUtil;
import com.ird.faa.service.util.StringUtil;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class DisciplineScientifiqueChercheurServiceImpl extends AbstractServiceImpl<DisciplineScientifique> implements DisciplineScientifiqueChercheurService {


    /* Get All libelle */
    @Override
    public List<String> getAllLibelle() {
        List<DisciplineScientifique> disciplineScientifiques = disciplineScientifiqueDao.findAll();
        List<String> libelles = new ArrayList<>();
        disciplineScientifiques.forEach(e -> libelles.add(e.getDisciplineScientifiqueErcLibelle()));
        return libelles;
    }
//    @Override
//    public List<DisciplineScientifique> findAll() {
//        List<DisciplineScientifique> result = new ArrayList();
//        result.addAll(findAllNonArchive());
//        result.addAll(findAllByOwner());
//        return result;
//    }
//

    /*  Temporaire  */
    @Override
    public List<DisciplineScientifique> findAll() {
        return disciplineScientifiqueDao.findAll();
    }
    /*                */

    @Override
    public List<DisciplineScientifique> findByDisciplineScientifiqueParentCode(String code) {
        return disciplineScientifiqueDao.findByDisciplineScientifiqueParentCode(code);
    }

    @Override
    @Transactional
    public int deleteByDisciplineScientifiqueParentCode(String code) {
        return disciplineScientifiqueDao.deleteByDisciplineScientifiqueParentCode(code);
    }

    @Override
    public List<DisciplineScientifique> findByDisciplineScientifiqueParentId(Long id) {
        return disciplineScientifiqueDao.findByDisciplineScientifiqueParentId(id);
    }

    @Override
    @Transactional
    public int deleteByDisciplineScientifiqueParentId(Long id) {
        return disciplineScientifiqueDao.deleteByDisciplineScientifiqueParentId(id);
    }

    @Override
    public DisciplineScientifique findByCode(String code) {
        if (code == null) return null;
        return disciplineScientifiqueDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String code) {
        return disciplineScientifiqueDao.deleteByCode(code);
    }

    @Override
    public DisciplineScientifique findByIdOrCode(DisciplineScientifique disciplineScientifique) {
        DisciplineScientifique resultat = null;
        if (disciplineScientifique != null) {
            if (StringUtil.isNotEmpty(disciplineScientifique.getId())) {
                resultat = disciplineScientifiqueDao.getOne(disciplineScientifique.getId());
            } else if (StringUtil.isNotEmpty(disciplineScientifique.getCode())) {
                resultat = disciplineScientifiqueDao.findByCode(disciplineScientifique.getCode());
            }
        }
        return resultat;
    }

    @Override
    public DisciplineScientifique findById(Long id) {
        if (id == null) return null;
        return disciplineScientifiqueDao.getOne(id);
    }

    @Override
    public DisciplineScientifique findByIdWithAssociatedList(Long id) {
        DisciplineScientifique disciplineScientifique = findById(id);
        findAssociatedLists(disciplineScientifique);
        return disciplineScientifique;
    }

    private void findAssociatedLists(DisciplineScientifique disciplineScientifique) {
        if (disciplineScientifique != null && disciplineScientifique.getId() != null) {
            List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociations = disciplineScientifiqueErcAssociationService.findByDisciplineScientifiqueId(disciplineScientifique.getId());
            disciplineScientifique.setDisciplineScientifiqueErcAssociations(disciplineScientifiqueErcAssociations);
        }
    }

    private void deleteAssociatedLists(Long id) {
        if (id != null) {
            disciplineScientifiqueErcAssociationService.deleteByDisciplineScientifiqueId(id);
        }
    }

    private void updateAssociatedLists(DisciplineScientifique disciplineScientifique) {
        if (disciplineScientifique != null && disciplineScientifique.getId() != null) {
            List
                    <List<DisciplineScientifiqueErcAssociation>> resultDisciplineScientifiqueErcAssociations = disciplineScientifiqueErcAssociationService.getToBeSavedAndToBeDeleted(disciplineScientifiqueErcAssociationService.findByDisciplineScientifiqueId(disciplineScientifique.getId()), disciplineScientifique.getDisciplineScientifiqueErcAssociations());
            disciplineScientifiqueErcAssociationService.delete(resultDisciplineScientifiqueErcAssociations.get(1));
            associateDisciplineScientifiqueErcAssociation(disciplineScientifique, resultDisciplineScientifiqueErcAssociations.get(0));
            disciplineScientifiqueErcAssociationService.update(resultDisciplineScientifiqueErcAssociations.get(0));

        }
    }

    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (disciplineScientifiqueDao.findById(id).isPresent()) {
            deleteAssociatedLists(id);
            disciplineScientifiqueDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public DisciplineScientifique update(DisciplineScientifique disciplineScientifique) {
        DisciplineScientifique foundedDisciplineScientifique = findById(disciplineScientifique.getId());
        if (foundedDisciplineScientifique == null) return null;
        else {
            archivableService.prepare(disciplineScientifique);
            updateAssociatedLists(disciplineScientifique);
            /* set the libelle for the Discipline Scientifique*/
            disciplineScientifique.setDisciplineScientifiqueErcLibelle(disciplineScientifiqueErcAssociationService.generateGlobalLibellFordisciplineScientifique(disciplineScientifique.getId()));
            return disciplineScientifiqueDao.save(disciplineScientifique);
        }
    }

    private void prepareSave(DisciplineScientifique disciplineScientifique) {
        disciplineScientifique.setDateCreation(new Date());
        if (disciplineScientifique.getDateArchivage() == null)
            disciplineScientifique.setDateArchivage(new Date());
        if (disciplineScientifique.getArchive() == null)
            disciplineScientifique.setArchive(false);


    }

    @Override
    public DisciplineScientifique save(DisciplineScientifique disciplineScientifique) {
        prepareSave(disciplineScientifique);

        DisciplineScientifique result = null;
        DisciplineScientifique foundedDisciplineScientifique = findByCode(disciplineScientifique.getCode());
        if (foundedDisciplineScientifique == null) {
            findDisciplineScientifiqueParent(disciplineScientifique);
            DisciplineScientifique savedDisciplineScientifique = disciplineScientifiqueDao.save(disciplineScientifique);
            saveDisciplineScientifiqueErcAssociations(savedDisciplineScientifique, disciplineScientifique.getDisciplineScientifiqueErcAssociations());
            result = savedDisciplineScientifique;
        }

        /* set disipline scientifique libelle and update */
        update(disciplineScientifique);

        return result;
    }

    @Override
    public List<DisciplineScientifique> save(List<DisciplineScientifique> disciplineScientifiques) {
        List<DisciplineScientifique> list = new ArrayList<>();
        for (DisciplineScientifique disciplineScientifique : disciplineScientifiques) {
            list.add(save(disciplineScientifique));
        }
        return list;
    }

    private List<DisciplineScientifiqueErcAssociation> prepareDisciplineScientifiqueErcAssociations(DisciplineScientifique disciplineScientifique, List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociations) {
        for (DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation : disciplineScientifiqueErcAssociations) {
            disciplineScientifiqueErcAssociation.setDisciplineScientifique(disciplineScientifique);
        }
        return disciplineScientifiqueErcAssociations;
    }


    @Override
    @Transactional
    public int delete(DisciplineScientifique disciplineScientifique) {
        if (disciplineScientifique.getCode() == null) return -1;

        DisciplineScientifique foundedDisciplineScientifique = findByCode(disciplineScientifique.getCode());
        if (foundedDisciplineScientifique == null) return -1;
        disciplineScientifiqueDao.delete(foundedDisciplineScientifique);
        return 1;
    }


    public List<DisciplineScientifique> findByCriteria(DisciplineScientifiqueVo disciplineScientifiqueVo) {

        String query = "SELECT o FROM DisciplineScientifique o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", disciplineScientifiqueVo.getId());
        query += SearchUtil.addConstraint("o", "libelleFr", "LIKE", disciplineScientifiqueVo.getLibelleFr());
        query += SearchUtil.addConstraint("o", "libelleEng", "LIKE", disciplineScientifiqueVo.getLibelleEng());
        query += SearchUtil.addConstraint("o", "code", "LIKE", disciplineScientifiqueVo.getCode());
        query += SearchUtil.addConstraint("o", "niveau", "=", disciplineScientifiqueVo.getNiveau());
        query += SearchUtil.addConstraint("o", "archive", "=", disciplineScientifiqueVo.getArchive());
        query += SearchUtil.addConstraintDate("o", "dateArchivage", "=", disciplineScientifiqueVo.getDateArchivage());
        query += SearchUtil.addConstraintDate("o", "dateCreation", "=", disciplineScientifiqueVo.getDateCreation());
        query += SearchUtil.addConstraintMinMax("o", "niveau", disciplineScientifiqueVo.getNiveauMin(), disciplineScientifiqueVo.getNiveauMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateArchivage", disciplineScientifiqueVo.getDateArchivageMin(), disciplineScientifiqueVo.getDateArchivageMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateCreation", disciplineScientifiqueVo.getDateCreationMin(), disciplineScientifiqueVo.getDateCreationMax());
        if (disciplineScientifiqueVo.getDisciplineScientifiqueParentVo() != null) {
            query += SearchUtil.addConstraint("o", "disciplineScientifiqueParent.id", "=", disciplineScientifiqueVo.getDisciplineScientifiqueParentVo().getId());
            query += SearchUtil.addConstraint("o", "disciplineScientifiqueParent.code", "LIKE", disciplineScientifiqueVo.getDisciplineScientifiqueParentVo().getCode());
        }

        query += " ORDER BY o.code";
        return entityManager.createQuery(query).getResultList();
    }

    private void saveDisciplineScientifiqueErcAssociations(DisciplineScientifique disciplineScientifique, List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociations) {

        if (ListUtil.isNotEmpty(disciplineScientifique.getDisciplineScientifiqueErcAssociations())) {
            List<DisciplineScientifiqueErcAssociation> savedDisciplineScientifiqueErcAssociations = new ArrayList<>();
            disciplineScientifiqueErcAssociations.forEach(element -> {
                element.setDisciplineScientifique(disciplineScientifique);
                disciplineScientifiqueErcAssociationService.save(element);
            });
            disciplineScientifique.setDisciplineScientifiqueErcAssociations(savedDisciplineScientifiqueErcAssociations);
        }
    }

    private void findDisciplineScientifiqueParent(DisciplineScientifique disciplineScientifique) {
        DisciplineScientifiqueParent loadedDisciplineScientifiqueParent = disciplineScientifiqueParentService.findByIdOrCode(disciplineScientifique.getDisciplineScientifiqueParent());

        if (loadedDisciplineScientifiqueParent == null) {
            return;
        }
        disciplineScientifique.setDisciplineScientifiqueParent(loadedDisciplineScientifiqueParent);
    }

    @Override
    @Transactional
    public void delete(List<DisciplineScientifique> disciplineScientifiques) {
        if (ListUtil.isNotEmpty(disciplineScientifiques)) {
            disciplineScientifiques.forEach(e -> disciplineScientifiqueDao.delete(e));
        }
    }

    @Override
    public void update(List<DisciplineScientifique> disciplineScientifiques) {
        if (ListUtil.isNotEmpty(disciplineScientifiques)) {
            disciplineScientifiques.forEach(e -> disciplineScientifiqueDao.save(e));
        }
    }

    private void associateDisciplineScientifiqueErcAssociation(DisciplineScientifique disciplineScientifique, List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociation) {
        if (ListUtil.isNotEmpty(disciplineScientifiqueErcAssociation)) {
            disciplineScientifiqueErcAssociation.forEach(e -> e.setDisciplineScientifique(disciplineScientifique));
        }
    }


    public List<DisciplineScientifique> findAllNonArchive() {
        // l'Attribut Visible does not exist on Discipline Scientifique
//        String query = "SELECT o FROM DisciplineScientifique o  WHERE o.archive != true AND o.visible = true";
        String query = "SELECT o FROM DisciplineScientifique o  WHERE o.archive != true";
        query += " ORDER BY o.code";
        return entityManager.createQuery(query).getResultList();
    }

    public List<DisciplineScientifique> findAllByOwner() {
        List<DisciplineScientifique> result = new ArrayList();
        User currentUser = SecurityUtil.getCurrentUser();
        if (currentUser != null && StringUtil.isNotEmpty(currentUser.getUsername())) {
            // l'Attribut Visible & username does not exist on Discipline Scientifique
//            String query = "SELECT o FROM DisciplineScientifique o  WHERE o.archive != true AND o.visible = false AND o.username = '" + currentUser.getUsername() + "'";
            String query = "SELECT o FROM DisciplineScientifique o  WHERE o.archive != true";
            query += " ORDER BY o.code";
            result = entityManager.createQuery(query).getResultList();
        }
        return result;
    }


    @Autowired
    private ArchivableService<DisciplineScientifique> archivableService;
    @Autowired
    private DisciplineScientifiqueParentChercheurService disciplineScientifiqueParentService;
    @Autowired
    private DisciplineScientifiqueErcAssociationChercheurService disciplineScientifiqueErcAssociationService;


    @Autowired
    private DisciplineScientifiqueDao disciplineScientifiqueDao;

    @Autowired
    private EntityManager entityManager;

}
