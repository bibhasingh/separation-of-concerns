/**
 *
 */
 export const saveNoCopies = (inputArr,userInput) => {
    const data = {
      noCopies: inputArr,
    };
  
    const alreadySaved = data.noCopies.includes(userInput);
    if (!alreadySaved) {
      data.noCopies.push(userInput);
    }

    return data.noCopies;
  
  };
