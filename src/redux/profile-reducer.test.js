import profileReduce, { addPostActionCreater } from './profile-reducer';

let state = {
    posts: [
        { comment: 'Hello World!', id: '1' },
        { comment: 'Прикольная стена.', id: '2' },
        { comment: 'Пишу о своём.', id: '3' },
        { comment: 'Привет всем!!!', id: '4' },
        { comment: 'Как прошел ваш день?', id: '5' },
        { comment: 'Прикол.', id: '6' }
    ],
    profile: null,
    status: '',
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreater('hello');
    let newState = profileReduce(state, action);

    expect(newState.posts.length).toBe(7);
})

it('message of new post correct', () => {
    let action = addPostActionCreater('hello');
    let newState = profileReduce(state, action);

    expect(newState.posts[6].comment).toBe('hello');
})