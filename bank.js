class Bank
{
    #balance = 0;
    getBalance() {
        return this.#balance;
    };

    setBalance(amount)
    {
        if (amount > 0)
        {
            this.#balance = amount;
            console.log(this.getBalance());
        }
        else {
            console.log("entered amount cannot be negative");
        }
    }

    withdrawl(amount)
    {
        if (amount > this.#balance)
        {
            console.log("insufficent funds");
            return;
        }
        else {
            this.#balance -= amount;
            console.log(this.getBalance());
        }
    }

    deposite = (amount) => {
        if (amount > 0) {
            this.#balance += amount;
            console.log(this.getBalance());
        }
    }
};

const account = new Bank();

account.setBalance(1000)