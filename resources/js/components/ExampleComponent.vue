<template>
    <div>
            <!-- SIDEBAR -->
            <SidebarComponent/>
            <!-- SIDEBAR -->

            <!-- NAVBAR -->
            <section id="content">
                <!-- NAVBAR -->
                <NavbarComponent/>
                <!-- NAVBAR -->

                <!-- MAIN -->
                <main>
                    
                    <router-view/>
                </main>
                <!-- MAIN -->
            </section>
            <!-- NAVBAR -->
    </div>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import PageTitleComponent from "../components/PageTitleComponent.vue";
    export default {
        components:{
            SidebarComponent,NavbarComponent,PageTitleComponent
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
