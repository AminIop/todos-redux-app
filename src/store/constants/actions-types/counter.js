export const CounterActionsTypes = {
    ByOne: {
        INCREMENT: 'count.byOne.increment',
        DECREMENT: 'count.byOne.decrement',
        RESET: 'count.byOne.reset',
        GET: {
            START: 'count.byOne.get.start',
            SUCCESS: 'count.byOne.get.success',
            FAIL: 'count.byOne.get.fail',
        }
    },
    ByAmount: {
        INCREMENT: 'count.byAmount.increment',
        DECREMENT: 'count.byAmount.decrement',
        RESET: 'count.byAmount.reset',
    }
}