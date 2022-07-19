import { h, text, runApp } from 'https://unpkg.com/supa-app@latest';

const IncrementBy = amt => state => ({
    ...state, count: state.count + amt 
});

runApp({
    node: document.getElementById('app'),
    state: {
      count: 0
    },
    effects: state => [],
    subscriptions: state => [],
    view: (state, setState) => (
        h('main', {}, 
            h('output', {}, 
                text('Counter: '), text(state.count)
            ),
            h('div', {},
                h('button', { onclick: () => setState(IncrementBy(1)) }, text('+')),
                h('button', { onclick: () => setState(IncrementBy(-1)) }, text('-'))
            )
        )
    )
});