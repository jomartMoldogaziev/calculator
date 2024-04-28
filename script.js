function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
} 

function back(){
    let uda = document.form.textview.value;
      document.form.textview.value =uda.substring(0,uda.length-1);
}

function equal(){
    let rov = document.form.textview.value;
    if(rov){
        document.form.textview.value=eval(rov);
    }
}