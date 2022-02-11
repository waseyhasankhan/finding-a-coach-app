import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null, //lastFetch should hold a timestamp whenever we fetched new data
      coaches: [
        {
          id: 'c1',
          firstName: 'Shahab Dad',
          lastName: 'Khan',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Shahab Dad Khan and I have worked as a freelance web developer for years.",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Mohammad',
          lastName: 'Shahzaib',
          areas: ['frontend', 'career'],
          description:
            "I'm Mohammed Shahzaib, a senior web developer in a big tech company with 7+ years of experience. I can help you in building websites easily.",
          hourlyRate: 30,
        },
      ],
    };
  },
  //   mutations:mutations,
  mutations,
  actions,
  getters,
};
