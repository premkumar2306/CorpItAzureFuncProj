module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    context.log('Helloooo!!!');
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};