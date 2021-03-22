document.addEventListener('DOMContentLoaded',(event) => {
    if (event) {
        console.info('DOM loaded');
    };


    const createBurger = document.getElementById('btn');

    if (createBurger) {
        createBurger.addEventListener('click', (e) => {
            // console.log('btn working')
            e.preventDefault();

            const newBurger = {
                name: document.getElementById('burgerInput').value.trim(),
            };

            fetch('/api/burgers', {
                method:'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('burgerInput').value="";
                // console.log('Created new Burger!');
                location.reload();
            });
        });
    }

    const eatBurger = document.querySelectorAll('.eatBtn');
    if (eatBurger) {
        eatBurger.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const eaten = {
                    devoured: true,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept:'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(eaten),
                }).then((response) => {
                    if (response.ok) {
                        // console.log('changed burger to eaten!');
                        location.reload();
                    }else {
                        alert('something went wrong');
                    }

                });
            });
        });
    }

    const deleteBurgers = document.getElementById('deleteBtn');

    if (deleteBurgers) {
        deleteBurgers.addEventListener('click', (e) => {
            // console.log('btn working');
            e.preventDefault();
        
            fetch('api/burgers/delete', {
                method:'DELETE',
            }).then((res) => {
                console.log(res);
                location.reload();
            });
        }
        );
    }








});