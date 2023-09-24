function Student (sid, snm){
    this.sid = sid
    this.snm = snm
}

Student.prototype.display = function(){
    console.log(`Student ID : ${this.sid}`)
    console.log(`Student Name : ${this.snm}`)
}

//Not allowed to access this pointer as its arrow function
Student.prototype.print = () => function(){
    console.log(`Student ID : ${this.sid}`)
    console.log(`Student Name : ${this.snm}`)
}

var s1 = new Student(1,"Stefan")

console.log(typeof Student)
console.log(s1)

s1.display()
s1.print()