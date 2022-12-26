<template>
    <section id="sidebar">
                <a href="#" class="brand"> T -<span style="color: #000;">FINANCE</span></a>
                <ul class="side-menu">
                    <!---->
                    <li class="divider" data-text="Module Client">Module Client</li>
                    <li>
                        <a href="#"><i class='bx bxs-inbox icon' ></i> Module clients <i class='bx bx-chevron-right icon-right' ></i></a>
                        <ul class="side-dropdown">
                            <li><router-link :to="{name:'liste-clients'}">Liste Client</router-link></li>
                            <li><router-link :to="{name:'type-client'}">Type Client</router-link></li>
                            <li><router-link :to="{name:'ajouter-client'}">Ajouter Client</router-link></li>
                        </ul>
                    </li>
                    <!---->
                    <li class="divider" data-text="Module Compte">Module Compte</li>
                    <li>
                        <a href="#"><i class='bx bxs-chart icon' ></i> Module Compte <i class='bx bx-chevron-right icon-right' ></i></a>
                        <ul class="side-dropdown">
                            <li><router-link :to="{name:'liste-comptes'}">Liste Compte</router-link></li>
                            <li><router-link :to="{name:'type-compte'}">Type Compte</router-link></li>
                            <li><router-link :to="{name:'ajouter-compte'}">Creer Compte</router-link></li>
                        </ul>
                    </li>
                    <!---->
                    <li class="divider" data-text="Module Operation">Module Operation</li>
                    <li>
                        <a href="#"><i class='bx bxs-widget icon' ></i> Module Operation <i class='bx bx-chevron-right icon-right' ></i></a>
                        <ul class="side-dropdown">
                            <li><router-link :to="{name:'liste-operations'}">Liste Operation</router-link></li>
                            <li><router-link :to="{name:'type-operation'}">Type Operation</router-link></li>
                            <li><router-link :to="{name:'ajouter-operation'}">Ajouter Operation</router-link></li>
                        </ul>
                    </li>
                </ul>

            </section>
</template>