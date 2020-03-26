export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString('en-US');
    return d.toLocaleDateString() + ' | '+ time.substr(0, 5) + time.slice(-2);
}
export function formatBoardScores(user, questions, loggedInUser){
    const { id, avatarURL } = user
    const name = id == loggedInUser ? 'You': user.name
    let answered = 0
    let created = 0
    for(const question of Object.entries(questions)){
        const { author, optionOne, optionTwo } = question[1];
        if (author === id){ created++ }
        if (optionOne.votes.includes(id) ||
             optionTwo.votes.includes(id)){ answered++}
        
    }
    return{
        name,
        avatarURL,
        answered,
        created,
        score: (answered + created)

    }


}
export function formatQuestionResults (question, author, loggedInUserID){
    const {id, optionOne, optionTwo, timestamp } = question
    const { avatarURL } = author
    let { name } = author
    const votedOptionOne = optionOne.votes.includes(loggedInUserID)
    const votedOptionTwo = optionTwo.votes.includes(loggedInUserID)
    const optionOneVoteCnt = optionOne.votes.length
    const optionTwoVoteCnt = optionTwo.votes.length
    const totalVotes = optionOneVoteCnt + optionTwoVoteCnt
    const chosedQuestion = votedOptionOne || votedOptionTwo

    name = author.id === loggedInUserID ? 'You Asked' : 'Asked by '+name;
    return {
        name,
        id,
        optionOneText : optionOne.text,
        optionTwoText : optionTwo.text,
        timestamp,
        votedOptionOne,
        votedOptionTwo,
        optionOneVoteCnt,
        optionTwoVoteCnt,
        totalVotes,
        chosedQuestion,
        optionOnePercentage : percentage(optionOneVoteCnt, totalVotes),
        optionTwoPercentage : percentage(optionTwoVoteCnt, totalVotes),
        avatarURL
    }

}

function percentage(number, total) {
    return  total !== 0 ? Math.round(number * 10000 / total) / 100 : 0
  }
