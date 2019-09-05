console.log('Starting app');
setTimeout(() => {
    console.log('Inside of callback');
    }, 2000);
  setTimeout(() =>  {
      console.log('Second setTimeout')
},3000);
console.log('Finishing up');