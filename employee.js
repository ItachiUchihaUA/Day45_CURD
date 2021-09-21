
 class EmployeePayrollData {
      
    // getter and setter method
            
            get id(){ return this._id; }
            set id(id) {
              this._id = id;
            }
            
            get name() { return this._name; }
            set name (name) { 
                let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
                if (nameRegex.test(name)) 
                    this._name = name; 
                else throw ' Name is Incorrect!';
            }
            
            get profilePic() { return this._profilePic; } set profilePic (profilePic) { this._profilePic = profilePic; }
            
            get gender() { return this._gender; } set gender (gender) { this._gender = gender;
            
            }
            
            get department() { return this._department; } 
            set department (department) { this._department = department; }

            get salary() { return this._salary; } 
            set salary(salary) { this._salary = salary; }

            get note() { return this._note; } 
            set note(note) { this._note = note; }

            get startDate() { return this._startDate; } 
            set startDate(startDate) { this._startDate = startDate; }

            toString(){       
                // const op = {year: 'numeric', month: 'long', day: 'numeric'};
                // console.log(this._startDate);
                // const empDate = !this.startDate ? "und" : this._startDate.toLocalDateString("en-US", op);          
                // console.log(empDate);
                return ("name='"+ this.name + ", gender=" + this.gender +
                ", profilePic='" + this._profilePic + "', department=" + this._department +
                ", salary=" + this._salary + ", startDate=" + this._startDate + ", note=" + this._note);
            }
}



window.addEventListener( 'DOMContentLoaded', () => { 
    const name = document.querySelector('#name');
    const textError = document.querySelector('.nameerror'); 
    name.addEventListener('input', function() {
        if (name.value.length== 0) {
            textError.textContent = "";
            return;
        }
    
    try {
        (new EmployeePayrollData()).name=name.value;
        textError.textContent = "";
        
    } catch (e){
        textError.textContent = e;
    }
    
    });

    const salary= document.querySelector('#salary');
        const output= document.querySelector('.salary-outputtext');
        output.textContent = salary.value;
        salary.addEventListener('input', function(){
            output.textContent=salary.value;
        });

    
});

const save = () => {
    try{
        let em = new EmployeePayrollData();
        // let employeePayrollData = createEmployeePayroll();
        // createAndUpdateStorage(employeePayrollData);
        em.name=(document.querySelector('#name').value);
        //console.log(em.name);
        em.profilePic=getSelec('.profi').pop();
       // console.log(em._profilePic);
        em.department=getSelec('.checkbox');
       // console.log(em.department);
        em.salary=document.querySelector('#salary').value;
       // console.log(em.salary);
        em.note=(document.querySelector('#notes').value);
       // console.log(em.note);
        em.gender=getSelec('.gender').pop();
       // console.log(em.gender);
        let date = document.querySelector('#day').value+" "+document.querySelector('#month').value+" "+document.querySelector('#year').value;
        em.startDate =Date.parse(date);
       // console.log("sassasas");
        createAndUpdateStorage(em);
    }catch(e){
        return console.log(e.toString);
    }
}

function getSelec(prop){
    let allt = document.querySelectorAll(prop);
    let sel = [];
    allt.forEach(n => { if(n.checked) sel.push(n.value) });
    return sel;
}

// const createEmployeePayroll = () =>{
//     let employeePayrollData = new EmployeePayrollData();
//    

function createAndUpdateStorage(emp){

    let list = JSON.parse(localStorage.getItem("empData"));
    console.log(list.toString());
    if(list!= undefined){
        list.push(emp);
    } else{
        list = [emp];
    }
    alert(emp);
    localStorage.setItem("empData", JSON.stringify(list));
}
