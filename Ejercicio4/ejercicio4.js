function cursos(student1Courses, student2Courses) {      
	
    let = student1Courses = ['Math', 'English', 'Programming'];
    let = student2Courses = ['Geography', 'Spanish', 'Programming'];

    let coincidencias = [];

    for(i=0; i < student1Courses.length; i++){
       for(j=0; j < student2Courses.length; j++){
           if (student2Courses[j] === student1Courses[i]){
           coincidencias.push(student2Courses[j]);
           }
        }
    }
return console.log("Cursos en común: " + coincidencias); // cursos en comun: Programming
} 
cursos();