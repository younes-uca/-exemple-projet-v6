package com.ird.faa.service.chercheur.impl;

import com.ird.faa.bean.DisciplineScientifique;
import com.ird.faa.bean.DisciplineScientifiqueErc;
import com.ird.faa.bean.DisciplineScientifiqueErcAssociation;
import com.ird.faa.bean.SemanticRelationship;
import com.ird.faa.dao.DisciplineScientifiqueErcAssociationDao;
import com.ird.faa.service.chercheur.facade.*;
import com.ird.faa.service.core.impl.AbstractServiceImpl;
import com.ird.faa.service.util.ListUtil;
import com.ird.faa.service.util.SearchUtil;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcAssociationVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@Service
public class DisciplineScientifiqueErcAssociationChercheurServiceImpl extends AbstractServiceImpl<DisciplineScientifiqueErcAssociation> implements DisciplineScientifiqueErcAssociationChercheurService {

    /* To generate the global libelle for disciplineScientifique  */
    @Override
    public String generateGlobalLibellFordisciplineScientifique(Long id) {
        StringBuilder concat = new StringBuilder();
        DisciplineScientifique disciplineScientifique = disciplineScientifiqueService.findById(id);
        concat.append(disciplineScientifique.getLibelleEng()).append("(");
        List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociationList = findByDisciplineScientifiqueId(id);
        disciplineScientifiqueErcAssociationList.forEach(e -> {
            String str = keyWordDisciplineScientifiqueErcChercheurService.generateDisciplineScientifiqueErcLibelle(e.getDisciplineScientifiqueErc().getId());
            if (!concat.toString().contains(str))
                concat.append(str).append(",");
        });
        String result = concat.substring(0, concat.length() - 1) + ")";
        return result;
    }

    /* To generate disciplineScientifiqueErc libelle for each disciplineScientifique */
    @Override
    public String generateDisciplineScientifiqueLibelle(Long id) {
        StringBuilder concat = new StringBuilder();
        DisciplineScientifique disciplineScientifique = disciplineScientifiqueService.findById(id);
        List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociationList = findByDisciplineScientifiqueId(id);
        List<DisciplineScientifiqueErc> disciplineScientifiqueErcList = new ArrayList<>();
        disciplineScientifiqueErcAssociationList.forEach(e -> disciplineScientifiqueErcList.add(e.getDisciplineScientifiqueErc()));
        disciplineScientifiqueErcList.forEach(e -> {
             String str = e.getLibelleEng();
            if(!concat.toString().contains(str))
                concat.append(e.getLibelleEng()).append(",");
        });
        return disciplineScientifique.getLibelleEng() + "(" + concat.substring(0, concat.length() - 1) + ")";
    }




    @Override
    public List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueErcCode(String code) {
        return disciplineScientifiqueErcAssociationDao.findByDisciplineScientifiqueErcCode(code);
    }

    @Override
    @Transactional
    public int deleteByDisciplineScientifiqueErcCode(String code) {
        return disciplineScientifiqueErcAssociationDao.deleteByDisciplineScientifiqueErcCode(code);
    }

    @Override
    public List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueErcId(Long id) {
        return disciplineScientifiqueErcAssociationDao.findByDisciplineScientifiqueErcId(id);
    }

    @Override
    @Transactional
    public int deleteByDisciplineScientifiqueErcId(Long id) {
        return disciplineScientifiqueErcAssociationDao.deleteByDisciplineScientifiqueErcId(id);
    }


    @Override
    public List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueCode(String code) {
        return disciplineScientifiqueErcAssociationDao.findByDisciplineScientifiqueCode(code);
    }

    @Override
    @Transactional
    public int deleteByDisciplineScientifiqueCode(String code) {
        return disciplineScientifiqueErcAssociationDao.deleteByDisciplineScientifiqueCode(code);
    }

    @Override
    public List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueId(Long id) {
        return disciplineScientifiqueErcAssociationDao.findByDisciplineScientifiqueId(id);
    }

    @Override
    @Transactional
    public int deleteByDisciplineScientifiqueId(Long id) {
        return disciplineScientifiqueErcAssociationDao.deleteByDisciplineScientifiqueId(id);
    }


    @Override
    public List<DisciplineScientifiqueErcAssociation> findBySemanticRelationshipCode(String code) {
        return disciplineScientifiqueErcAssociationDao.findBySemanticRelationshipCode(code);
    }

    @Override
    @Transactional
    public int deleteBySemanticRelationshipCode(String code) {
        return disciplineScientifiqueErcAssociationDao.deleteBySemanticRelationshipCode(code);
    }

    @Override
    public List<DisciplineScientifiqueErcAssociation> findBySemanticRelationshipId(Long id) {
        return disciplineScientifiqueErcAssociationDao.findBySemanticRelationshipId(id);
    }

    @Override
    @Transactional
    public int deleteBySemanticRelationshipId(Long id) {
        return disciplineScientifiqueErcAssociationDao.deleteBySemanticRelationshipId(id);
    }


    @Override
    public DisciplineScientifiqueErcAssociation findById(Long id) {
        if (id == null) return null;
        return disciplineScientifiqueErcAssociationDao.getOne(id);
    }

    @Override
    public DisciplineScientifiqueErcAssociation findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (disciplineScientifiqueErcAssociationDao.findById(id).isPresent()) {
            disciplineScientifiqueErcAssociationDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public DisciplineScientifiqueErcAssociation update(DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation) {
        DisciplineScientifiqueErcAssociation foundedDisciplineScientifiqueErcAssociation = findById(disciplineScientifiqueErcAssociation.getId());
        if (foundedDisciplineScientifiqueErcAssociation == null) return null;
        else {
            return disciplineScientifiqueErcAssociationDao.save(disciplineScientifiqueErcAssociation);
        }
    }

    @Override
    public DisciplineScientifiqueErcAssociation save(DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation) {


        findDisciplineScientifiqueErc(disciplineScientifiqueErcAssociation);
        findDisciplineScientifique(disciplineScientifiqueErcAssociation);
        findSemanticRelationship(disciplineScientifiqueErcAssociation);

        return disciplineScientifiqueErcAssociationDao.save(disciplineScientifiqueErcAssociation);


    }

    @Override
    public List<DisciplineScientifiqueErcAssociation> save(List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociations) {
        List<DisciplineScientifiqueErcAssociation> list = new ArrayList<>();
        for (DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation : disciplineScientifiqueErcAssociations) {
            list.add(save(disciplineScientifiqueErcAssociation));
        }
        return list;
    }


    @Override
    @Transactional
    public int delete(DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation) {
        if (disciplineScientifiqueErcAssociation.getId() == null) return -1;
        DisciplineScientifiqueErcAssociation foundedDisciplineScientifiqueErcAssociation = findById(disciplineScientifiqueErcAssociation.getId());
        if (foundedDisciplineScientifiqueErcAssociation == null) return -1;
        disciplineScientifiqueErcAssociationDao.delete(foundedDisciplineScientifiqueErcAssociation);
        return 1;
    }


    public List<DisciplineScientifiqueErcAssociation> findByCriteria(DisciplineScientifiqueErcAssociationVo disciplineScientifiqueErcAssociationVo) {

        String query = "SELECT o FROM DisciplineScientifiqueErcAssociation o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", disciplineScientifiqueErcAssociationVo.getId());
        if (disciplineScientifiqueErcAssociationVo.getDisciplineScientifiqueErcVo() != null) {
            query += SearchUtil.addConstraint("o", "disciplineScientifiqueErc.id", "=", disciplineScientifiqueErcAssociationVo.getDisciplineScientifiqueErcVo().getId());
            query += SearchUtil.addConstraint("o", "disciplineScientifiqueErc.code", "LIKE", disciplineScientifiqueErcAssociationVo.getDisciplineScientifiqueErcVo().getCode());
        }

        if (disciplineScientifiqueErcAssociationVo.getDisciplineScientifiqueVo() != null) {
            query += SearchUtil.addConstraint("o", "disciplineScientifique.id", "=", disciplineScientifiqueErcAssociationVo.getDisciplineScientifiqueVo().getId());
            query += SearchUtil.addConstraint("o", "disciplineScientifique.code", "LIKE", disciplineScientifiqueErcAssociationVo.getDisciplineScientifiqueVo().getCode());
        }

        if (disciplineScientifiqueErcAssociationVo.getSemanticRelationshipVo() != null) {
            query += SearchUtil.addConstraint("o", "semanticRelationship.id", "=", disciplineScientifiqueErcAssociationVo.getSemanticRelationshipVo().getId());
            query += SearchUtil.addConstraint("o", "semanticRelationship.code", "LIKE", disciplineScientifiqueErcAssociationVo.getSemanticRelationshipVo().getCode());
        }

        return entityManager.createQuery(query).getResultList();
    }

    private void findDisciplineScientifiqueErc(DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation) {
        DisciplineScientifiqueErc loadedDisciplineScientifiqueErc = disciplineScientifiqueErcService.findByIdOrCode(disciplineScientifiqueErcAssociation.getDisciplineScientifiqueErc());

        if (loadedDisciplineScientifiqueErc == null) {
            return;
        }
        disciplineScientifiqueErcAssociation.setDisciplineScientifiqueErc(loadedDisciplineScientifiqueErc);
    }

    private void findDisciplineScientifique(DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation) {
        DisciplineScientifique loadedDisciplineScientifique = disciplineScientifiqueService.findByIdOrCode(disciplineScientifiqueErcAssociation.getDisciplineScientifique());

        if (loadedDisciplineScientifique == null) {
            return;
        }
        disciplineScientifiqueErcAssociation.setDisciplineScientifique(loadedDisciplineScientifique);
    }

    private void findSemanticRelationship(DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation) {
        SemanticRelationship loadedSemanticRelationship = semanticRelationshipService.findByIdOrCode(disciplineScientifiqueErcAssociation.getSemanticRelationship());

        if (loadedSemanticRelationship == null) {
            return;
        }
        disciplineScientifiqueErcAssociation.setSemanticRelationship(loadedSemanticRelationship);
    }

    @Override
    @Transactional
    public void delete(List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociations) {
        if (ListUtil.isNotEmpty(disciplineScientifiqueErcAssociations)) {
            disciplineScientifiqueErcAssociations.forEach(e -> disciplineScientifiqueErcAssociationDao.delete(e));
        }
    }

    @Override
    public void update(List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociations) {
        if (ListUtil.isNotEmpty(disciplineScientifiqueErcAssociations)) {
            disciplineScientifiqueErcAssociations.forEach(e -> disciplineScientifiqueErcAssociationDao.save(e));
        }
    }

    @Override
    public List<DisciplineScientifiqueErcAssociation> findAll() {
        return disciplineScientifiqueErcAssociationDao.findAll();
    }


    @Autowired
    private DisciplineScientifiqueChercheurService disciplineScientifiqueService;
    @Autowired
    private SemanticRelationshipChercheurService semanticRelationshipService;
    @Autowired
    private DisciplineScientifiqueErcChercheurService disciplineScientifiqueErcService;

    @Autowired
    private KeyWordDisciplineScientifiqueErcChercheurService keyWordDisciplineScientifiqueErcChercheurService;

    @Autowired
    private EntityManager entityManager;


    @Autowired
    private DisciplineScientifiqueErcAssociationDao disciplineScientifiqueErcAssociationDao;


}
