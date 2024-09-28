class Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.Volume = 50/100;

        this.Volume_range = document.getElementById("volume_range");
        this.Volume_range.addEventListener("change",()=>{
        this.audio_file.Volume= this.Volume_range.value/100;
        });
        this.Volume_speed = document.getElementById("volume_speed");
        this.Volume_speed.addEventListener("change",()=>{
        this.audio_file.Volume= this.Volume_range.value/100;
        });

        this.Volume_speed = document.getElementById("volume_speed");
        this.Volume_speed.playbackRate = 1;
        this.Volume_speed.addEventListener("change",()=>{
            this.audio_file.playbackRate = this.Volume_speed.value / 100;
        });
        
    }
}
onload = new Volume();