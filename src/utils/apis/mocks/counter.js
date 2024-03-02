const apisCounterMocks = {
    getCountValue: () => {
        return new Promise((resolve) => {
            return setTimeout(() => resolve({
                data: { value: 5 }
            }), 3000)
        })
    }
}
export default apisCounterMocks