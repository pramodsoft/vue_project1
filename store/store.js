import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";




Vue.use(Vuex);
//use should be of small case

export const store = new Vuex.Store({
state:{
    mycollection:["pramod","vinod","sarita","kavita"],
    myfatch:"",
    loading_status:"Loading....",
    show_status:"",
    database_data:"Loading.....",
    post_data:"Post the Loading....",
}, 
getters:{
    myfatchdata:function(state){
        return state.myfatch;
    }
},



actions:{
    
    get_post_record:function({commit,state}){
        axios.get("")
        .then(function(response){
            state.loading_status="";
            commit("CHANGE_STATE",response.data);
        })
    },
    get_database_record:function({state}){
        axios.get("http://localhost:3000/mytest").then(function(response){
           state.database_data=response.data;
        });
    },
    post_data_to_server:function(payload){
        axios.get("http://localhost:3000/post_data",payload).then(function(response){
           state.database_data=response.data;
        });
    }
},

mutations:{     
add_new_member:function(state,payload){
state.mycollection.push(payload);
},

CHANGE_STATE:function(state,payload){

    
    for(let i=0;i<payload.length;i++){   
        payload[i].show_status=false;
    }
     

state.myfatch=payload;
}
}

});

  