class Interview {
    
    constructor(){
        let _candidate_; // object doesn't have candidate as property? Protecting candidate, only way to access is through closure

        this.setCandidate=function(candidate){       //method
            this._candidate_ =candidate;
        } 
    
        this.getCandidate=function(){
            return this._candidate_;
        }
    
    }
    scheduleInterview=function(date){
        this.date=date;
        console.log("An interview was scheduled with " + this.getCandidate() + " at " + this.date);
    }
}
class Candidate{
    constructor(){
        let _fullName_;
        let _email_;
    
    this.setFullName = function(name){
        this._fullName_=name;
    }
    this.getFullName=function(){
        return this._fullName_;
    }
    this.setEmail=function(email){
        this._email_=email;
    }
    this.getEmail=function(){
        return this._email_;
    }
}
}
class TechnicalInterview extends Interview{    
    constructor(){
        super();
        let _platform_;
        
    
    this.setPlatform=function(p){
        this._platform_=p;
    }
    this.getPlatform=function(){
        return this._platform_;
    }
}
    scheduleInterview=function(date){
        this.date = date;
        console.log("Interview platform " + this.getPlatform() + " is configured");
    }
}


class HRInterview extends Interview{
    
    constructor(){
        super();
        let _questionnaire_;

    
    this.setQuestionnaire = function(q){
        this._questionnaire_=q;
    }
    this.getQuestionnaire = function(){
        return this._questionnaire_;
    }
    
}
    scheduleInterview=function(date){
        this.date=date;
        console.log("Interview questionnaire " + this.getQuestionnaire() + " will be sent to " + this.getCandidate());
    }
    
}
//setting candidate names and emails
let candidate1 = new Candidate();
candidate1.setFullName("John Smith");
candidate1.setEmail("jonhn@gmail.com")

let candidate2 = new Candidate();
candidate2.setFullName("Alice Wonder");
candidate2.setEmail("alice@gmail.com");

//printing out scheduled interviews for candidate 1 and 2
let int = new Interview();
int.setCandidate(candidate1.getFullName());
int.scheduleInterview("Jan. 1st");

let hrInt =  new HRInterview();
hrInt.setCandidate(candidate1.getEmail());
hrInt.setQuestionnaire(['Q1','Q2','Q3']);
hrInt.scheduleInterview();

//second interview scheduled
let int2c1 = new Interview();
int2c1.setCandidate(candidate1.getFullName());
int2c1.scheduleInterview("Feb. 1st");

//HackerRank 1
let intpHC = new TechnicalInterview();
intpHC.setPlatform("HackerRank");
intpHC.scheduleInterview();

//candidate2
let int2 = new Interview();
int2.setCandidate(candidate2.getFullName());
int2.scheduleInterview("March 1st");

let intQ2 = new HRInterview();
intQ2.setQuestionnaire(["Q1","Q2","Q3"]);
intQ2.setCandidate(candidate2.getEmail());
intQ2.scheduleInterview();

//candidate 2 interview 2
let intc2 = new Interview();
intc2.setCandidate(candidate2.getFullName());
intc2.scheduleInterview("April 1st");

//HackerRank 2
let intpHC2 = new TechnicalInterview();
intpHC2.setPlatform("HackerRank");
intpHC2.scheduleInterview();
