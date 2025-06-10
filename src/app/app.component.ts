import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface empInterfase{
    id:number,
    name:string,
    role:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, CommonModule]
})

export class AppComponent {
  // employeeRole : string = '';

  // employees=signal<empInterfase[]>([
  //   {id:1, name:'EmployeeA', role:'Admin'},
  //   {id:2, name:'EmployeeB', role:'HR'},
  //   {id:3, name:'EmployeeC', role:'IT Support'},
  //   {id:4, name:'EmployeeD', role:'Admin'},
  //   {id:5, name:'EmployeeE', role:'Admin'},
  //   {id:6, name:'EmployeeF', role:'Dev'},
  //   {id:7, name:'EmployeeG', role:'Dev'},
  //   {id:8, name:'EmployeeH', role:'Dev'},
  //   {id:9, name:'EmployeeI', role:'HR'},
  //   {id:10, name:'EmployeeJ', role:'IT Support'},
  // ])

  // a=10;
  // b=5;
  // res=this.a+this.b

  // message:string="Hello!";
  // isDisabled:boolean=false;

  // onButtonClick(msg:string){
  //   alert(msg)
  // }

  // result : number = 0;
  // onIncrementClick(){
  //   this.result++;
  // }

  // onDecrementClick(){
  //   this.result--;
  // }

  // onKeyPressed(e:any){
  //   // console.log("key pressed")
  //   console.log(e.target.value)
  // }

  // isShift(){
  //   alert("Shift + Y Pressed")
  // }

  // staticInput:string="Static 2 way binding";
  // dynamicInput:string="Dynamic 2 way binding";

  // userInput:string="";
  // dynamicVal:string=""

  // onClick(){
  //   this.dynamicVal=this.userInput;
  // }
  // quantity:number=1;
  // pricePerItem=100;
  
  // get totalPrice():number{
  //   return this.quantity*this.pricePerItem;
  // }


  // message:string = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.";
  // buttonClicked:boolean=false;

  // onClick(){
  //   this.buttonClicked=!this.buttonClicked;
  // }
  
  // fullStack=[
  //   {
  //     id:1,
  //     title:"Angular"
  //   },
  //   {
  //     id:2,
  //     title:"ReactJS"
  //   },
  //   {
  //     id:3,
  //     title:"NextJS"
  //   },
  //   {
  //     id:4,
  //     title:".NET"
  //   }
  // ]

  // age:number=30;

  // colorMode:string='lightMode';
  // toggleMode(){
  //   if(this.colorMode==='lightMode'){
  //     this.colorMode='darkMode';
  //   }else if(this.colorMode==='darkMode'){
  //     this.colorMode='lightMode';
  //   }
  // }

  // nm:string='';
  // em:string='';
  // emailIsValid:boolean=false;
  // formIsSubmitted:boolean=false;

  // checkValidation(em:string):void{
  //   if(em.includes('@') && em.includes('.com'))
  //     this.emailIsValid=true;
  //   else
  //     this.emailIsValid=false;
  // }

  // showMessage(){
  //   if(this.emailIsValid && this.nm.length!==0){
  //     this.formIsSubmitted=true;
  //   }
  //   else{
  //     this.formIsSubmitted=false;
  //   }
  // }

  name:string="";
}
