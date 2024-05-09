var button= document.getElementById('add-btn')
button.onclick=function (){
          // create div the put components
   var div= document.createElement('div');
   div.id='horizontal';

        // create subject element 
   var subject= document.createElement('input');
   subject.type='text';
   subject.name='subjectName';
   subject.placeholder='Subject Name';
      // create total element
   var total= document.createElement('input');
   total.type='number';
   total.name='totalMarks';
   total.placeholder='Total Marks';
     // create obtient element
   var obtained=document.createElement('input');
   obtained.type='number';
   obtained.name='obtientMarks';
   obtained.className='marksObtained'
   obtained.placeholder='Obtient Marks';
      // create deletebtn 
    var deleteBtn= document.createElement('button')  
    deleteBtn.id='deleteBtn';
    deleteBtn.type='button'
    deleteBtn.innerHTML='<i class="fa-solid fa-trash"></i>'

    // create tr and a table of tbody
    var subjectTr= document.createElement('tr');
       subjectTr.setAttribute('align','center');
    var subjectTd= document.createElement('td');
    var totalTd=document.createElement('td');
    var obtainedTd= document.createElement('td');
        obtainedTd.setAttribute('colspan','2')
      
        // append subject tr

   subjectTr.append(subjectTd);
   subjectTr.append(totalTd);
   subjectTr.append(obtainedTd);
   var subjectBody= document.getElementById('subject-body');
   subjectBody.append(subjectTr);
          
   // subject append in a dynamic div

   div.append(subject);
   div.append(total);
   div.append(obtained);
   div.append(deleteBtn);
   var dynamic= document.getElementById('dynamic');
   dynamic.append(div);


   // live preview of subject marks 
  subject.oninput= function(){
     subjectTd.innerHTML=this.value;
  }
  total.oninput= function(){
    totalTd.innerHTML=this.value;
  }
  obtained.oninput= function (){
    obtainedTd.innerHTML=this.value;
   
    // calculate the obtained marks 
    var totalMarksFind= 0;
    var obt= document.getElementsByClassName('marksObtained');
    for(i=0; i<obt.length; i++){
         
         var num= Number(obt[i].value);
         totalMarksFind= totalMarksFind + num;

    }
       
        var obtainedMarksFind=document.getElementById('obtainedMarksFind');
        obtainedMarksFind.innerHTML=totalMarksFind;
       
        // calculate total marks to find the percentage 
        noofSubject= obt.length;
        percentageValue= parseInt(totalMarksFind/noofSubject);

        var percentageFind= document.getElementById('percentageFind');
         percentageFind.innerHTML=percentageValue +'%';

       // find grade of the marks
    var grade = '';
    if(percentageValue > 84) grade = 'A+';
    else if(percentageValue > 74) grade = 'A';
    else if(percentageValue > 59) grade = 'B+';
    else if(percentageValue > 49) grade = 'B';
    else grade = 'Fail';

    gradeFind=document.getElementById('gradeFind');
    gradeFind.innerHTML=grade;
      
  }


   deleteBtn.onclick= function (){
       div.remove();
       subjectTr.remove();
   }
}

   // change your profile image
var fileImg=document.getElementById('img-file');
var pickProfileImg= document.getElementById('pick-profile-img')
fileImg.onchange= function (){
  var file= this.files[0];
  var url= URL.createObjectURL(file);
  pickProfileImg.src=url;
}
   // change your school logo 
var schoolLogo= document.getElementById('school-file')
schoolLogo.onchange= function (){
  var file=this.files[0];
  var url= URL.createObjectURL(file);
  var pickLogo= document.getElementById('pick-school-logo');
  pickLogo.src=url;
}

  // input schoolName write function
  var schoolName= document.getElementById('schoolName');
  schoolName.oninput= function (){
    var schoolNamePick= document.getElementById('schoolNamePick');
    schoolNamePick.innerHTML= this.value;
  }
  // input tagline write function
  var tagLine= document.getElementById('tagline')
  tagLine.oninput= function (){
    var tagelineDescription= document.getElementById('taglineDescription');
    tagelineDescription.innerHTML= this.value;
  }
  // candidate Name write function
  var candidateName=document.getElementById('candidateName');
  candidateName.oninput= function (){
      var yourName= document.getElementById('yourName');
      yourName.innerHTML= this.value;
  }
  // candidate fatherName write function
  var fatherName=document.getElementById('fatherName');
  fatherName.oninput= function (){
     var yourFatherName=document.getElementById('yourFatherName');
     yourFatherName.innerHTML=this.value;
  }
 // Date of birth write function
 var dob=document.getElementById('dob');
 dob.oninput= function (){
    var date= document.getElementById('date');
    date.innerHTML=this.value;
 }
 var genderName= document.getElementById('genderName');
 genderName.oninput= function (){
  var genderFind=document.getElementById('genderFind');
  genderFind.innerHTML=this.value;
 }

 var className= document.getElementById('className');
  className.oninput= function(){
    var classFind=document.getElementById('classFind');
    classFind.innerHTML=this.value;

  }
  
 var rollNo= document.getElementById('rollNo') ;
 rollNo.oninput= function (){
  var rollnoFind= document.getElementById('rollnoFind');
    rollnoFind.innerHTML= this.value;
 }