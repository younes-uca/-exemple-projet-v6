package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.DisciplineScientifiqueParentAdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.DisciplineScientifiqueParent;
import com.ird.faa.ws.rest.provided.converter.DisciplineScientifiqueParentConverter;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueParentVo;

@Api("Manages disciplineScientifiqueParent services")
@RestController
@RequestMapping("api/admin/disciplineScientifiqueParent")
public class DisciplineScientifiqueParentRestAdmin {

@Autowired
private DisciplineScientifiqueParentAdminService disciplineScientifiqueParentService;

@Autowired
private DisciplineScientifiqueParentConverter disciplineScientifiqueParentConverter;


            @ApiOperation("Updates the specified  disciplineScientifiqueParent")
            @PutMapping("/")
            public  DisciplineScientifiqueParentVo update(@RequestBody  DisciplineScientifiqueParentVo  disciplineScientifiqueParentVo){
            DisciplineScientifiqueParent disciplineScientifiqueParent = disciplineScientifiqueParentConverter.toItem(disciplineScientifiqueParentVo);
            disciplineScientifiqueParent = disciplineScientifiqueParentService.update(disciplineScientifiqueParent);
            return disciplineScientifiqueParentConverter.toVo(disciplineScientifiqueParent);
            }

    @ApiOperation("Finds a list of all disciplineScientifiqueParents")
    @GetMapping("/")
    public List<DisciplineScientifiqueParentVo> findAll(){
        return disciplineScientifiqueParentConverter.toVo(disciplineScientifiqueParentService.findAll());
    }

    @ApiOperation("Finds a disciplineScientifiqueParent with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DisciplineScientifiqueParentVo findByIdWithAssociatedList(@PathVariable Long id){
    return disciplineScientifiqueParentConverter.toVo(disciplineScientifiqueParentService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search disciplineScientifiqueParent by a specific criteria")
    @PostMapping("/search")
    public List<DisciplineScientifiqueParentVo> findByCriteria(@RequestBody DisciplineScientifiqueParentVo disciplineScientifiqueParentVo){
        return disciplineScientifiqueParentConverter.toVo(disciplineScientifiqueParentService.findByCriteria(disciplineScientifiqueParentVo));
        }

            @ApiOperation("Finds a disciplineScientifiqueParent by id")
            @GetMapping("/id/{id}")
            public DisciplineScientifiqueParentVo findById(@PathVariable Long id){
            return disciplineScientifiqueParentConverter.toVo(disciplineScientifiqueParentService.findById(id));
            }

            @ApiOperation("Saves the specified  disciplineScientifiqueParent")
            @PostMapping("/")
            public DisciplineScientifiqueParentVo save(@RequestBody DisciplineScientifiqueParentVo disciplineScientifiqueParentVo){
            DisciplineScientifiqueParent disciplineScientifiqueParent = disciplineScientifiqueParentConverter.toItem(disciplineScientifiqueParentVo);
            disciplineScientifiqueParent = disciplineScientifiqueParentService.save(disciplineScientifiqueParent);
            return disciplineScientifiqueParentConverter.toVo(disciplineScientifiqueParent);
            }

            @ApiOperation("Delete the specified disciplineScientifiqueParent")
            @DeleteMapping("/")
            public int delete(@RequestBody DisciplineScientifiqueParentVo disciplineScientifiqueParentVo){
            DisciplineScientifiqueParent disciplineScientifiqueParent = disciplineScientifiqueParentConverter.toItem(disciplineScientifiqueParentVo);
            return disciplineScientifiqueParentService.delete(disciplineScientifiqueParent);
            }

            @ApiOperation("Deletes a disciplineScientifiqueParent by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return disciplineScientifiqueParentService.deleteById(id);
            }




            @PutMapping("/archiver/")
            public DisciplineScientifiqueParentVo archiver(@RequestBody DisciplineScientifiqueParentVo disciplineScientifiqueParentVo){
                DisciplineScientifiqueParent disciplineScientifiqueParent = disciplineScientifiqueParentService.archiver(disciplineScientifiqueParentConverter.toItem(disciplineScientifiqueParentVo));
                return disciplineScientifiqueParentConverter.toVo(disciplineScientifiqueParent);
                }

            @PutMapping("/desarchiver/")
            public DisciplineScientifiqueParentVo desarchiver(@RequestBody DisciplineScientifiqueParentVo disciplineScientifiqueParentVo){
                DisciplineScientifiqueParent disciplineScientifiqueParent = disciplineScientifiqueParentService.desarchiver(disciplineScientifiqueParentConverter.toItem(disciplineScientifiqueParentVo));
                return disciplineScientifiqueParentConverter.toVo(disciplineScientifiqueParent);}
            }
