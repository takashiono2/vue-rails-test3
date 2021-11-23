import axios from "axios";

const apiUrl = "http://localhost:3000";
//初期状態です
const state = {
  events: [],
  event: null//eventの初期値をnullとする
};

const getters = {
  events: state => state.events.map(event => {
    return {
      ...event,
      start: new Date(event.start),
      end: new Date(event.end)
    };
  }),
  event: state => state.event ? {
    ... state.event,
    start: new Date(state.event.start),
    end: new Date(state.event.end)
  } : null
};
//更新情報です
const mutations = {
  setEvents: function(state, events){
    return state.events = events
  },
  setEvent: function(state, event){
    return state.event = event
  }//eventの時
};
//外部からのactionに対応します
const actions = {
  async fetchEvents({commit}){
    const response = await axios.get(`${apiUrl}/events`)
    commit('setEvents',response.data)
  },
  setEvent({commit},event){
    commit('setEvent',event)
  }//setEvent関数で、setEventを実行（commit）、eventデータを渡す
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
