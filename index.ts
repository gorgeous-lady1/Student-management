#! /usr /bin /env node
import inquirer from "inquirer";

 class student {
    id: string;
    name: string;
    coursesEnrolled: string[];
    feesAmount: number;

    constructor(id: string, name: string, coursesEnrolled: string[],feesAmount: number ){
        this.id = id
        this.name = name
        this.coursesEnrolled = coursesEnrolled
        this.feesAmount = feesAmount
    }
}


let baseId = 10000
let studentId: string = "";
let continueEnrollment = true;

let students: student[] = []



do{
    let action = await inquirer.prompt({
        type: "list",
        name:"ans",
        message: "please select an option:\n",
        choices: ["Enroll a student", "show student status"]
    })

    if(action.ans === "Enroll a student"){
        let studentName = await inquirer.prompt({
            type: "input",
            name: "ans",
            message: "Please entre your name:"
        })
        
        let trimmedStudentName = (studentName.ans).trim().toLowerCase()
        let studentNameCheck = students.map(obj => obj.name)

        if(studentNameCheck.includes(trimmedStudentName) === false ){
            if(trimmedStudentName !== ""){
                baseId++
                studentId = "STID" + baseId


                console.log("\n\tYour account has been created");
                console.log(`welcome< ${trimmedStudentName}!`);


            let course = await inquirer.prompt({
                type:"list",
                name : "ans",
                message:"please select a course",
                choices:["IT", "English", "cooking"]

            })

            let courseFees = 0;
            switch(course.ans){
                case "IT" :
                    courseFees = 5000;
                    break;

                case "English" :
                    courseFees = 500;
                    break;

                case "cooking" :
                     courseFees = 200;
                     break;
            }
            
            let couseConfirm  = await inquirer.prompt({
                type :"confirm",
                name:"ans",
                message:"Do you want to enroll in this course"
                           
            })



             if(couseConfirm.ans === true){
                                
        let trimmedStudentName = (studentName.ans).trim().toLowerCase()
                let Student = new student(studentId, trimmedStudentName , [course.ans], courseFees)
            
                students.push(Student)

                console.log("you have enrolled in this course");

                    
              } 

            }else{ console.log("invalid name");

        }
        
        }else{
            console.log("this name is already exist");
        }

        }
        else if(action.ans === "show student status"){ 
            if ( students.length !== 0){
                let studentNamescheck = students.map(e => e.name)

                let selectedStudent = await inquirer.prompt({
                    type:"list",
                    name:"ans",
                    message:"please select name",
                    choices: studentNamescheck

                })

                let foundStudent = students.find(Student => Student.name === selectedStudent.ans)

                console.log("Student information");
                console.log("foundStudent");
                console.log("\n");


                
            }else{
                console.log("record is empty");
            }
    }

            let userConfirm = await inquirer.prompt({
                type: "confirm",
                name: "ans",
                message:"Do you want to continue?"

            })

            if(userConfirm.ans === false){
                continueEnrollment = false
    
    }
    }while(true)

