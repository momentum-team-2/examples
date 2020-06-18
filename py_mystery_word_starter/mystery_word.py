def get_word():
    # open the file to get its contents
    # choose one word at random to be The Word that should be guessed
    word = "pig"  # change this to the word you choose from the file
    return word


def get_user_guess():
    guess = input("Guess a letter ")
    # this print statement is not necessary but you could use it to help confirm what's happening
    print(f"You guessed {guess}")
    return guess  # when this function is called, we want to get back what the user guessed


def show_blanks_or_letters(word):
    # we will have to alter this:
    # if the letter has been guessed, we should show letters instead of blanks
    output = ''
    for letter in word:
        output += (" _ ")
    print(output)


def play_game():
    # choose a word
    word = get_word()

    # show the user blanks for each letter in the word
    show_blanks_or_letters(word)
    # have some way for the user to make a guess
    # let's put it in a function!
    guess = get_user_guess()

    # record the guesses
    # possible implementation: set up a list to store the user guess in
    # where and when do we need access to this? Consider where you might store this information and how you will access it and change it
    guesses = []
    guesses.append(guess)  # add the guess to the list

    # record the number of tries (wrong guesses) -> maybe do this later

    # compare the guess to the letters in the word.
    # this is definitely a tricky part. Can you think of how you could do this?
    # is the user's guess one of the letters?
    # restated: is the users's guess (letter) in the word?
    # if the letter is in the word
    # show the letter instead of a blank
    # if the letter is not in the word
    # show the blank
    # and subtract one try
    # show the blanks/filled-in-letters to the user again
    # Ask user for a guess again...


if __name__ == "__main__":
    play_game()
