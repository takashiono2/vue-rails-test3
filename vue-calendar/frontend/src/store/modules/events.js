import axios from "axios";

const apiUrl = "http://localhost:3000";
//初期状態です
const state = {
  events: [],
  event: null,
  isEditMode: false
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
  } : null,
  isEditMode(state){
    return state.isEditMode
  }//isEditModeのstateの状態,
};
//更新情報です
const mutations = {
  setEvents(state, events){
    return state.events = events
  },
  setEvent(state, event){
    return state.event = event
  },
  setEditMode(state,bool){
    return state.isEditMode = bool
  }
  //setEditModeのmutaionsの状態、変数をboolとする
};
//外部からのaction（非同期）に対応します
const actions = {
  async fetchEvents({commit}){
    const response = await axios.get(`${apiUrl}/events`)
    commit('setEvents',response.data)// `${apiUrl}/events`からデータを非同期で取得、fetchEvents関数で、setEventsで更新（commit）する。
  },
  setEvent({commit},event){
    commit('setEvent',event)
  },
  setEditMode({commit,bool}){
    commit('setEditMode',bool)//setEditMode関数の更新の実行（commit）は、setEditMode関数でする
  }
};

export default {
  namespaced: true,// namespaced: true,名前空間分け登録
  state,
  getters,
  mutations,
  actions
};
