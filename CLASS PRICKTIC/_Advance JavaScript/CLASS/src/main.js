


class Student {
    constructor (info, mark) {
        this.name = info.name
        this.roll = info.roll
        this.reg = info.reg


        this.ban = mark.ban
        this.eng = mark.eng
        this.math = mark.math
        this.s = mark.s
        this.ss = mark.ss
        this.reli = mark.reli


        this.getGpaGrade = function (sub) {
            let gpa ;
            let grade ;

            if(this[sub] >= 0 && this[sub] < 33){
                gpa = 0
                grade = "F"

            } else if ( this[sub] >=33 && this[sub] < 40){
                gpa = 1
                grade = "D"

            } else if ( this[sub] >= 40  && this[sub] < 50){
                gpa = 2
                grade = "C"

            } else if ( this[sub] >= 50 && this[sub] < 60){
                gpa = 3
                grade = "B"

            } else if ( this[sub] >= 60 && this[sub] < 70){
                gpa = 3.5
                grade = "A-"

            } else if ( this[sub] >= 70 && this[sub] < 80){
                gpa = 4
                grade = "A"

            } else if ( this[sub] >= 80 && this[sub] <= 100){
                gpa = 5
                grade = "A+"

            } else {
                gpa = "invalid !"
                grade = "invalid !"

            }

            return {
                gpa : gpa,
                grade : grade
            }
        }

        

        this.cgpa = function () {
            
            const totalcgpa = this.getGpaGrade('ban').gpa + this.getGpaGrade('eng').gpa + this.getGpaGrade('math').gpa + this.getGpaGrade('s').gpa + this.getGpaGrade('ss').gpa + this.getGpaGrade('reli').gpa

            const fainalCgpa = totalcgpa / 6

            return fainalCgpa.toFixed(2)

        }


        this.fainalResult = function () {


            if(this.ban >= 33 && this.eng >= 33 && this.math >= 33 && this.s >= 33 && this.ss >= 33 && this.reli >=33){
                return 'passed'
            } else{
                return 'Faild!'
            }

        }

        this.fainalGrade = function () {

            if( this.ban >= 33 && this.eng >= 33 && this.math >= 33 && this.s >= 33 && this.ss >= 33 && this.reli >=33){

                if(this.cgpa() >= 1 && this.cgpa() < 2){
                    return "D"

                } else if(this.cgpa() >= 2  && this.cgpa() < 3){
                    return "C"

                } else if (this.cgpa() >= 3 && this.cgpa < 3.5){
                    return "B"

                } else if (this.cgpa() >= 3.5 && this.cgpa <4){
                    return "A-"

                } else if(this.cgpa() >= 4 && this.cgpa < 4.5){
                    return "A"

                } else if (this.cgpa() >= 4.5 && this.cgpa <= 5){
                    return "A+"
                }

            } else{
                return "F"
            }

        }


    }

}








const student = new Student({name:'akash', roll : '001101', reg: '889901'}, {ban:25, eng : 66, math : 88, s : 54, ss : 75, reli : 54})


console.log(student.fainalGrade());