

console.log("ma")
function sockMerchant(n ,ar){
    // duplacated numbers in ar
        let replicatedSocks = 0
        const newArr = [...ar]
        for(let i = 0 ; i < n ; i++ ){
            for(let j = i+1 ; j < n ; j++){
                if(newArr[i] === newArr[j]){
                    //ggg
                        replicatedSocks++
                        console.log(newArr.splice(i,j))
                        break
                }
                    
            }
        }
   return replicatedSocks.num
    
}
sockMerchant(10 , [1,2,3,5,6,6,3,2,1,1])
const  log = console.log
// log(sockMerchant(10 , [1,2,3,5,6,6,3,2,1,1]))