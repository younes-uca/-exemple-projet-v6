package  com.ird.faa.ws.rest.provided.vo;


public class KeyWordVo {

    private String id ;
    private String libelleFr ;
    private String libelleEng ;
    private String code ;
    private Boolean admin ;
    private String username ;
    private Boolean visible ;





    public KeyWordVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getLibelleFr(){
        return this.libelleFr;
        }

        public void setLibelleFr(String libelleFr){
        this.libelleFr = libelleFr;
        }
        public String getLibelleEng(){
        return this.libelleEng;
        }

        public void setLibelleEng(String libelleEng){
        this.libelleEng = libelleEng;
        }
        public String getCode(){
        return this.code;
        }

        public void setCode(String code){
        this.code = code;
        }
        public Boolean getAdmin(){
        return this.admin;
        }

        public void setAdmin(Boolean admin){
        this.admin = admin;
        }
        public String getUsername(){
        return this.username;
        }

        public void setUsername(String username){
        this.username = username;
        }
        public Boolean getVisible(){
        return this.visible;
        }

        public void setVisible(Boolean visible){
        this.visible = visible;
        }





            }
