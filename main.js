const workers = [
  { name: "John", salary: 500 },
  { name: "Linda", salary: 1300 },
  { name: "Mike", salary: 1500 },
  { name: "Pidor", salary: 1500 }
 ];
 
 const getWorthyWorkers = (workersArr) => {
   const worthyWorkers = [];
 
   workersArr.forEach(currentWorker => {
     if(currentWorker.salary > 1000){
       worthyWorkers.push(currentWorker.name)
       worthyWorkers.push(currentWorker.salary)
     }
   })

   ///return worthyWorkers;
 
     // for (let i = 0; i < workersArr.length; i++) {
     //   const currentWorker = workersArr[i];
 
     //   if(currentWorker.salary > 1000){
     //     worthyWorkers.push(currentWorker.name);
     //     worthyWorkers.push(currentWorker.salary);
     //   }
     // }
 
   
 }
 
 console.log(getWorthyWorkers(workers));
