function bestFriend(friends){

    let bigName = friends[0];
    for(let i = 0; i < friends.length; i++){
        let friend = friends[i];
        // console.log(friend);
        if(friend.length > bigName.length){
            bigName = friend;
        }  
    }
    return bigName;
    
}

let friends = ['Rahim', 'abul', 'Junayed', 'Rafi', 'Minhazur', 'Tonu'];
console.log(bestFriend(friends));