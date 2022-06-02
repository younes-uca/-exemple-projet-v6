package  com.ird.faa.ws.rest.provided.vo;


public class KeyWordDisciplineScientifiqueErcVo {

    private String id ;



        private KeyWordVo keyWordVo ;
        private DisciplineScientifiqueErcVo disciplineScientifiqueErcVo ;


    public KeyWordDisciplineScientifiqueErcVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }



        public KeyWordVo getKeyWordVo(){
        return this.keyWordVo;
        }

        public void setKeyWordVo(KeyWordVo keyWordVo){
        this.keyWordVo = keyWordVo;
        }
        public DisciplineScientifiqueErcVo getDisciplineScientifiqueErcVo(){
        return this.disciplineScientifiqueErcVo;
        }

        public void setDisciplineScientifiqueErcVo(DisciplineScientifiqueErcVo disciplineScientifiqueErcVo){
        this.disciplineScientifiqueErcVo = disciplineScientifiqueErcVo;
        }


            }
