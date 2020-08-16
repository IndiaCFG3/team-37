<template>
    <nav>
        <v-app-bar app clipped-right>
            <template v-if="CheckCurrentUser">
                <v-app-bar-nav-icon class="ml-1" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title class="grey--text">
                    <span class="font-weight-bold">DashBoard</span>
                </v-toolbar-title>
            </template>

            <template v-else>
                <v-toolbar-title class="grey--text">
                    <span class="font-weight-bold">InQui - Labs</span>
                </v-toolbar-title>
            </template>

            <v-spacer></v-spacer>

            <template v-if="CheckCurrentUser">
                <v-menu origin= "center center"  transition="scale-transition">
                    <template v-slot:activator="{ on: Menu }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: ToolTip }">
                                <v-avatar color="#FFE0B2" v-on="{...Menu, ...ToolTip}" size="40" style="right: 25px; cursor: pointer;">
                                    <span>{{ GetAvatarDisplay }}</span>
                                </v-avatar>
                            </template>
                            <span>Account</span>
                        </v-tooltip>
                    </template> 
                    <v-card class="mx-auto" width="256" tile>
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-avatar color="#FFE0B2" size="40">
                                        <span>{{ GetAvatarDisplay }}</span>
                                    </v-avatar>
                                </v-list-item-avatar>
                            </v-list-item>
                            
                            <!-- Edit User Name Part -->

                            <v-list-item @click.stop="ChangeProfileName = true">
                                <v-list-item-title class="title">{{ GetCurrentUserName }}</v-list-item-title>
                                <v-list-item-action>
                                    <v-btn icon @click="ChangeProfileName = !ChangeProfileName">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                                <v-dialog v-model="ChangeProfileName" persistent max-width="600">
                                    <v-card>
                                        <v-card-title class="headline">New Profile Name</v-card-title>
                                        <v-card-text>
                                            <v-text-field v-model="NewProfileName" v-on:keyup.enter="PressedEnter()"></v-text-field>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green darken-1" text @click="GetNewProfileName()"> Save </v-btn>
                                            <v-btn color="green darken-1" text @click="ChangeProfileName = false"> Close </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-list-item>

                            <!-- Edit User Name Part Ends-->

                            <!-- Log out Part -->

                            <v-list-item>
                                <v-list-item-title class="title" @click="LogOutUser()">Log Out</v-list-item-title>
                            </v-list-item>

                            <!-- Log Out Part Ends -->
                        </v-list>
                    </v-card>
                </v-menu>
            </template>
            
            <template v-else>
                <v-list style="background: #F5F5F5;">
                    <v-list-item-group >
                        <v-list-item style="float: left;" v-for="Link in UserLinks" :key="Link.Title" router :to="Link.Route">
                            <v-list-item-content>
                                <v-list-item-title class='font-weight-bold'>
                                    {{ Link.Title }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </template>

        </v-app-bar>
        <v-navigation-drawer app temporary v-model='drawer' class="indigo">
            <v-list class="mt-12">
                <v-list-item-group>
                    <v-list-item v-for="Content in SideMenu" :key="Content.Title" router :to="Content.Route">
                        <v-list-item-icon>
                            <v-icon class="white--text">
                                {{Content.Icon}}
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class='white--text font-weight-bold'>
                                {{ Content.Title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    data() {
        return {
            drawer: false,
            Sidedrawer: false,
            item: 0,
            ChangeProfileName: false,
            NewProfileName: "",
            SideMenu: [
                { Title: 'Home', Icon: 'mdi-home', Route:'/'},
                { Title: 'Teams', Icon: 'mdi-microsoft-teams', Route:'/Teams' }
            ],

            UserLinks: [
                {Title: 'Login', Route: '/Login'},
            ]
        }
    },

    methods: {
        //Extra Methods Here
        PressedEnter: function() {
            this.ChangeProfileName = false;
            if(this.NewProfileName === "") {
                this.NewProfileName = '' // Give Current User Name..
            }
            // var Payload = {
            //     Target: 'ProfileName',
            //     ProfileName: this.NewProfileName
            // };

            // this.$store.dispatch('UpdateMainData', Payload);
            this.NewProfileName = ""; // Important to reintialize NewProfileName Variable...
        },

        GetNewProfileName: function() {
            this.PressedEnter();
        },

        LogOutUser: function() {
            this.$store.dispatch("LogOutUser");
        },
        ...mapActions([]),
    },

    computed: {
        //Extra computed properties here 
        // GetProfileName: function() {
        //     return this.$store.getters.GetProfileName;
        // },
        
        // ProfileNamePresent: function() {
        //     return this.$store.getters.CheckProfileName
        // },
        ...mapGetters([
            'CheckCurrentUser',
            'GetCurrentUserName',
            'GetAvatarDisplay'
        ])
    }
}
</script>