import axios from './../utils/http'

const course = {
    state: {
        courseInfo: {},
    },
    mutations: {
        SET_COURSE_INFO(state, data) {
            state.courseInfo = data
        },
    },
    actions: {
        async getCourseDetail({ commit }, course_id) {
            try {
                const { data } = await axios.get(`/course/detail/${course_id}`)
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async signUpCourse({ commit }, courseId) {
            const param = {
                courseId,
            }
            try {
                const { data } = await axios.post('/course/signUpCourse', param)
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async getCourseMainInfo({ commit }, courseId) {
            const query = {
                courseId,
            }
            try {
                const { data } = await axios.get('/course/courseMainInfo', {
                    params: query,
                })
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async collectCourse({ commit }, courseId) {
            try {
                const { data } = await axios.post(
                    '/course/collectCourse',
                    courseId
                )
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async releaseComment({ commit }, commentData) {
            try {
                const { data } = await axios.post(
                    '/course/releaseComment',
                    commentData
                )
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async getCourseNotesData({ commit }, courseId) {
            const query = {
                courseId,
            }
            try {
                const { data } = await axios.get('/course/notesData', {
                    params: query,
                })
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async getCourseDiscussData({ commit }, courseId) {
            const query = {
                courseId,
            }
            try {
                const { data } = await axios.get('/course/discussData', {
                    params: query,
                })
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async getDiscussById({ commit }, discussId) {
            const query = {
                discussId,
            }
            try {
                const { data } = await axios.get('/course/discussItem', {
                    params: query,
                })
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async releaseCourseDiscuss({ commit }, discussData) {
            try {
                const { data } = await axios.post(
                    '/course/addDiscuss',
                    discussData
                )
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async updateCourseDiscuss({ commit }, params) {
            try {
                const { data } = await axios.post(
                    '/course/updateDiscuss',
                    params
                )
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async deleteDiscussById({ commit }, discussId) {
            const params = {
                discussId,
            }
            try {
                const { data } = await axios.delete('/course/deleteDiscuss', {
                    params,
                })
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async getNoteComment({ commit }, noteId) {
            const query = {
                noteId,
            }
            try {
                const { data } = await axios.get('/course/noteComment', {
                    params: query,
                })
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async getTestData({ commit }, lessonId) {
            const query = {
                lessonId,
            }
            try {
                const { data } = await axios.get('/course/testData', {
                    params: query,
                })
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async checkTestData({ commit }, anwser) {
            try {
                const { data } = await axios.post(
                    '/course/checkTestData',
                    anwser
                )
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async getDanMuByLessonId({ commit }, lessonId) {
            const query = {
                lessonId,
            }
            try {
                const { data } = await axios.get('/course/danmu', {
                    params: query,
                })
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async addDanMu({ commit }, danMuData) {
            try {
                const { data } = await axios.post('/course/addDanMu', danMuData)
                return data
            } catch (err) {
                console.log(err)
            }
        },
    },
}

export default course
