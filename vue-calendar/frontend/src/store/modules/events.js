import axios from "axios";

const apiUrl = "http://localhost:3000";
//初期状態です
const state = {
  events: [],
  //eventの初期値をnullとする
};

const getters = {
  events: state => state.events.map(event => {
    return {
      ...event,
      start: new Date(event.start),
      end: new Date(event.end)
    };
  }),
  //event: state => state.event ? で三項演算子データが入った時とnullの時
};
//更新情報です
const mutations = {
  setEvents: (state, events) => (state.events = events),
  //eventの時
};
//外部からのactionに対応します
const actions = {
  //fetchEventsは非同期処理で実行（commit）
  //setEvent処理で実行（commit）
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
