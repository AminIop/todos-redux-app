const apisCounterMocks = {
    getCountValue: () => {
        new Promise((resolve) => {
            return setTimeout(() => resolve({
                data: { value: -8 }
            }), 3000)
        })
    }
}
export default apisCounterMocks