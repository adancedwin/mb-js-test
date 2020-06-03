// Original code.
// The following code is not going to work as expected.
// It will return `undefined` for calling `this.teamName`.
//
// The reason being that our callback function is going to refer
// to `window` as it does not have a context of the object itself.
const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
team.teamSummary();

// To solve the issue we simply need to make sure that the context
// of the object is known (accessible) to the object's callback function.
//
// Solution #1
// In this particular case, we have just one line of code handling
// all of the logic for making up a new string. An arrow function does not
// have its own `this` binding and will look it up in scope just like
// a normal variable. Arrow function is going to work perfectly with our oneliner
// (though it may not be pretty readability-wise).
// Like this:
const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
        return this.members.map((member) => { return `${member} is on team ${this.teamName}`; });
    }
};
team.teamSummary();


// Solution #2
// Now, imagine we actually have a case with multiple lines of code
// and we cannot use arrow function here.
//
// For that we can setup a variable inside of our function, the variable is
// going to have our object's context which later we will use inside
// of our callback.
// The convention for naming variables of this kind is
// either `self` or `that`, though `self` seems to be more preferable by the devs community.
// Like this:
const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
        let self = this;
        return this.members.map(function(member) {
            let firstString = member;
            let secondString = self.teamName;
            return firstString + "is on team" + secondString;
        });
    }
};
team.teamSummary();