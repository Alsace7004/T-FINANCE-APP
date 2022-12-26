<template>
    <ul class="breadcrumbs">
                        <li><a href="#">{{module}}</a></li>
                        <li class="divider">/</li>
                        <li><a href="#" class="active">{{sousModule}}</a></li>
    </ul>
</template>

<script>
export default {
    props:{
        module:{
            type:String,
            //default:'Nom du module'
        },
        sousModule:{
            type:String,
            //default:'Sous Module Quelconque'
        }
    }
}
</script>