package com.ird.faa.service.chercheur.facade;

import com.ird.faa.bean.KeyWordDisciplineScientifiqueErc;
import com.ird.faa.service.core.facade.AbstractService;
import com.ird.faa.ws.rest.provided.vo.KeyWordDisciplineScientifiqueErcVo;

import java.util.List;

public interface KeyWordDisciplineScientifiqueErcChercheurService extends AbstractService<KeyWordDisciplineScientifiqueErc, Long, KeyWordDisciplineScientifiqueErcVo> {


    String generateDisciplineScientifiqueErcLibelle(Long id);




    /**
     * delete KeyWordDisciplineScientifiqueErc from database
     *
     * @param id - id of KeyWordDisciplineScientifiqueErc to be deleted
     */

    int deleteById(Long id);


    List<KeyWordDisciplineScientifiqueErc> findByKeyWordCode(String code);

    int deleteByKeyWordCode(String code);

    List<KeyWordDisciplineScientifiqueErc> findByKeyWordId(Long id);

    int deleteByKeyWordId(Long id);

    List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueErcCode(String code);

    int deleteByDisciplineScientifiqueErcCode(String code);

    List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueErcId(Long id);

    int deleteByDisciplineScientifiqueErcId(Long id);


}
