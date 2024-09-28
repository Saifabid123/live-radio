class Player{
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if (screen.width<500){
            heightMain.style.width = screen.width + "px";
        }

        var heightDiv = document.getElementById("content");
        heightDiv.style.height =screen.height-300 + "px";
    }
}
onload = new Player();

// class buttons

class Audio_Player{
    constructor(){
        this.audio_file =  document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play_pause");

        this.isPlayed;
        this.play_pause_button.addEventListener("click", ()=>{
            this.play_pause();
        }); 

            this.names_radio =[];
            this.names_radio[0]="RADIO ADRAR";
            this.names_radio[1]="RADIO CHLEF";
            this.names_radio[2]="RADIO LAGHOUAT";
            this.names_radio[3]="RADIO oumelbouaghi";
            this.names_radio[4]="RADIO batna";
            this.names_radio[5]="RADIO Bejaia";
            this.names_radio[6]="RADIO Biskra";
            this.names_radio[7]="RADIO Béchar";
            this.names_radio[8]="RADIO Blida";
            this.names_radio[9]="RADIO Bouira";
            this.names_radio[10]="RADIO Tamanrasset";
            this.names_radio[11]="RADIO Tebessa";
            this.names_radio[12]="RADIO Tlemcen";
            this.names_radio[13]="RADIO Tiaret";
            this.names_radio[14]="RADIO Tizi Ouzou";
            this.names_radio[15]="RADIO Alger";
            this.names_radio[16]="RADIO Djelfa";
            this.names_radio[17]="RADIO jijel";
            this.names_radio[18]="RADIO Sétif";
            this.names_radio[19]="RADIO Saïda";
            this.names_radio[20]="RADIO Skikda";
            this.names_radio[21]="RADIO Sidi Bel Abbès";
            this.names_radio[22]="RADIO Annaba";
            this.names_radio[23]="RADIO Guelma";
            this.names_radio[24]="RADIO Constantine";
            this.names_radio[25]="RADIO Médéa";
            this.names_radio[26]="RADIO Mostaganem";
            this.names_radio[27]="RADIO M'Sila";
            this.names_radio[28]="RADIO Mascara";
            this.names_radio[29]="RADIO Ouargla";
            this.names_radio[30]="RADIo Oran ";
            this.names_radio[31]="RADIO El Bayadh";
            this.names_radio[32]="RADIO Illizi ";
            this.names_radio[33]="RADIO Bordj Bou Arreridj ";
            this.names_radio[34]="RADIO Boumerdès";
            this.names_radio[35]="RADIO El Tarf ";
            this.names_radio[36]="RADIO Tindouf";
            this.names_radio[37]="RADIO Tissemsilt";
            this.names_radio[38]="RADIO El Oued ";
            this.names_radio[39]="RADIO Khenchela";
            this.names_radio[40]="RADIO Souk Ahras";
            this.names_radio[41]="RADIO Tipaza";
            this.names_radio[42]="RADIO Mila";
            this.names_radio[43]="RADIO Aïn Defla";
            this.names_radio[44]="RADIO Naâma";
            this.names_radio[45]="RADIO Aïn Témouchent";
            this.names_radio[46]="RADIO Ghardaia";
            this.names_radio[47]="RADIO Relizane";
            this.names_radio[48]="channel 1";
            this.names_radio[49]="channel 2";
            this.names_radio[50]="channel 3";
            this.names_radio[51]="RADIO RAI";
            this.names_radio[52]="QURAN KARIM";
            this.names_radio[53]="al'iidhaeat althaqafia";
            this.names_radio[54]="RADIO JIL-FM";


            

            this.source_audio =[];
            this.source_audio[0]= "https://webradio.tda.dz/Adrar_64K.mp3";
            this.source_audio[1]= "https://webradio.tda.dz/Chlef_64K.mp3";
            this.source_audio[2]= "https://webradio.tda.dz/Laghouat_64K.mp3";
            this.source_audio[3]= "https://webradio.tda.dz/OumBouaghi_64K.mp3";
            this.source_audio[4]= "https://webradio.tda.dz/Batna_64K.mp3";
            this.source_audio[5]= "https://webradio.tda.dz/Bejaia_64K.mp3";
            this.source_audio[6]= "https://webradio.tda.dz/Biskra_64K.mp3";
            this.source_audio[7]= "https://webradio.tda.dz/Bechar_64K.mp3";
            this.source_audio[8]= "https://webradio.tda.dz/Blida_64K.mp3";
            this.source_audio[9]= "https://webradio.tda.dz/Bouira_64K.mp3";
            this.source_audio[10]= "https://webradio.tda.dz/Tamanrasset_64K.mp3";
            this.source_audio[11]= "https://webradio.tda.dz/Tebessa_64K.mp3";
            this.source_audio[12]= "https://webradio.tda.dz/Tlemcen_64K.mp3";
            this.source_audio[13]= "https://webradio.tda.dz/Tiaret_64K.mp3";
            this.source_audio[14]= "https://webradio.tda.dz/TiziOuzou_64K.mp3";
            this.source_audio[15]= "https://webradio.tda.dz/ElBahdja_64K.mp3";
            this.source_audio[16]= "https://webradio.tda.dz/Djelfa_64K.mp3";
            this.source_audio[17]= "https://webradio.tda.dz/Jijel_64K.mp3";
            this.source_audio[18]= "https://webradio.tda.dz/Setif_64K.mp3";
            this.source_audio[19]= "https://webradio.tda.dz/Saida_64K.mp3";
            this.source_audio[20]= "https://webradio.tda.dz/Skikda_64K.mp3";
            this.source_audio[21]= "https://webradio.tda.dz/SidiBelabes_64K.mp3";
            this.source_audio[22]= "https://webradio.tda.dz/Annaba_64K.mp3";
            this.source_audio[23]= "https://webradio.tda.dz/Guelma_64K.mp3";
            this.source_audio[24]= "https://webradio.tda.dz/Constantine_64K.mp3";
            this.source_audio[25]= "https://webradio.tda.dz/Medea_64K.mp3";
            this.source_audio[26]= "https://webradio.tda.dz/Mostaganem_64K.mp3";
            this.source_audio[27]= "https://webradio.tda.dz/Msila_64K.mp3";
            this.source_audio[28]= "https://webradio.tda.dz/Mascara_64K.mp3";
            this.source_audio[29]= "https://webradio.tda.dz/Ouargla_64K.mp3";
            this.source_audio[30]= "https://webradio.tda.dz/Oran_64K.mp3";
            this.source_audio[31]= "https://webradio.tda.dz/ElBayedh_64K.mp3";
            this.source_audio[32]= "https://webradio.tda.dz/Illizi_64K.mp3";
            this.source_audio[33]= "https://webradio.tda.dz/BordjBouArreridj_64K.mp3";
            this.source_audio[34]= "https://webradio.tda.dz/Boumerdes_64K.mp3";
            this.source_audio[35]= "https://webradio.tda.dz/Taref_64K.mp3";
            this.source_audio[36]= "https://webradio.tda.dz/Tindouf_64K.mp3";
            this.source_audio[37]= "https://webradio.tda.dz/Tissemssilt_64K.mp3";
            this.source_audio[38]= "https://webradio.tda.dz/ouedSouf_64K.mp3";
            this.source_audio[39]= "https://webradio.tda.dz/Khenchela_64K.mp3";
            this.source_audio[40]= "https://webradio.tda.dz/SoukAhras_64K.mp3";
            this.source_audio[41]= "https://webradio.tda.dz/Tipaza_64K.mp3";
            this.source_audio[42]= "https://webradio.tda.dz/Mila_64K.mp3";
            this.source_audio[43]= "https://webradio.tda.dz/AinDefla_64K.mp3";
            this.source_audio[44]= "https://webradio.tda.dz/Naama_64K.mp3";
            this.source_audio[45]= "https://webradio.tda.dz/AinTimouchent_64K.mp3";
            this.source_audio[46]= "https://webradio.tda.dz/Ghardaia_64K.mp3";       
            this.source_audio[47]= "https://webradio.tda.dz/Relizan_64K.mp3";       
            this.source_audio[48]= "https://webradio.tda.dz/Chaine1_64K.mp3"; 
            this.source_audio[49]= "https://webradio.tda.dz/Chaine2_64K.mp3";         
            this.source_audio[50]= "https://webradio.tda.dz/Chaine3_64K.mp3";         
            this.source_audio[51]= "https://webradio.tda.dz/Internationale_64K.mp3";         
            this.source_audio[52]= "https://webradio.tda.dz/Coran_64K.mp3";
            this.source_audio[53]= "https://webradio.tda.dz/Culture_64K.mp3";         
            this.source_audio[54]= "https://webradio.tda.dz/Jeunesse_64K.mp3";         
         
        
  
            this.server = 0;

            this.setResource();

            document.getElementById("next").addEventListener("click",()=>{
                if (this.server<this.source_audio.length-1) {
                 ++this.server;   
                 this.isPlayed = false;
                }else{
                    this.server=0;
                }
                localStorage.setItem("SAVE-POSITION",this.server);
                this.setResource();
            });
            document.getElementById("back").addEventListener("click",()=>{
             if (this.server>0){
               --this.server;
               this.isPlayed = false;

             }else{
                this.server=this.source_audio.length-1;
             }  
             localStorage.setItem("SAVE-POSITION",this.server);

             this.setResource();

            });

         } 
         setResource(){
            if (localStorage.getItem("SAVE-POSITION")!=null) {
                this.server= localStorage.getItem("SAVE-POSITION");

            }
            this.audio_file.src = this.source_audio[this.server];
            this.title_audio.innerHTML = this.names_radio[this.server];
            this.play_pause();

        };

         play_pause(){
            if (this.isPlayed == false){
                this.play_pause_button.src = "./img/pause.png";
                this.audio_file.play();  
                this.isPlayed=true;
            }else{
                this.play_pause_button.src = "./img/play.png";
                this.audio_file.pause();
                this.isPlayed=false;
            }
         }
}
onload = new Audio_Player();


