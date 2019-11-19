export const fruitMixin = {
    data () {
        return {
          fruits:['apple','banana','chikkoo','mango','mausambi'],
          filterText:''
        }
      },
      computed:{
       filterFruits(){
         return this.fruits.filter((element)=>
         {
           return element.match(this.filterText);
         });
       }
      },
      created(){
         console.log('Created');
      }
};