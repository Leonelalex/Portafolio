<script>
    export default{
        data() {
                return{
                    homeActive : true,
                    aboutActive : false,
                    portfolioActive : false,
                    skillsActive : false,
                    contactactive : false,
                }
        },
        methods: {
            changeTheme(){
                document.body.classList.toggle("light-mode");
            },
            changePage(activar) {
                console.log(activar);
                this.homeActive = false;
                this.aboutActive = false;
                this.portfolioActive = false;
                this.skillsActive = false;
                this.contactactive = false;
            }
        },
    }
</script>

<template>

    <div class="theme-btn" @click="changeTheme">
      <font-icon icon="adjust" />
    </div>

    <nav class="controls">
        <RouterLink to="/">
            <div :class="{control: true, activebtn: homeActive}" data-id="home" @click="changePage(homeActive)">
                <font-icon icon="house" />
            </div>
        </RouterLink>

        <RouterLink to="/about">
            <div class="control" :class="{activebtn: aboutActive}" data-id="about" @click="changePage(aboutActive)">
                <font-icon icon="user" />
            </div>
        </RouterLink>

        <RouterLink to="/portfolio">
            <div class="control" :class="{activebtn: portfolioActive}" data-id="portfolio" @click="changePage(portfolioActive)">
                <font-icon icon="briefcase" />
            </div>
        </RouterLink>

        <RouterLink to="/skills">
            <div class="control" :class="{activebtn: skillsActive}" data-id="habilidades" @click="changePage(skillsActive)">
                <font-icon icon="newspaper" />
            </div>
        </RouterLink>

        <RouterLink to="/contact">
            <div class="control" :class="{activebtn: contactactive}" data-id="contacto" @click="changePage(contactactive)">
                <font-icon icon="envelope" />
            </div>
        </RouterLink>
    </nav>
</template>

<style>
    .controls {
        position: fixed;
        z-index: 10;
        top: 50%;
        right: 3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
    }

    .control {
        color: white;
        padding: 1rem;
        cursor: pointer;
        background-color: var(--color-grey-4);
        width: 55px;
        height: 55px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.7rem 0;
        box-shadow: var(--box-shadow-1);
    }

    .controls .activebtn {
        background-color: var(--color-secondary);
        transition: all 0.4s ease-in-out;
    }

    .theme-btn {
        top: 5%;
        right: 3%;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: var(--color-grey-4);
        cursor: pointer;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.1s ease-in-out;
        }

        .theme-btn:active {
        transform: translateY(-3px);
        }
</style>