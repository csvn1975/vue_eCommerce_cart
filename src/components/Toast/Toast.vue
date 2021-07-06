<template>
    <div id= "toast" :class="'toast toast--' + type" v-if= "isShow">
        <div class="toast__icon"><i :class = "classIcon" ></i></div>
            <div class="toast__body">
                <h3 class="toast__title"> {{title}}</h3>
            <p class="toast__content"><slot></slot></p>
            </div>
            <div class="toast__close"
               
            >
                <i class="fa fa-times" 
                 @click = "close"
                aria-hidden="true"></i>
            </div>
    </div>

</template>

<script>
// icon: 'success', 'info', 'error'
export default {
    name: 'Toast',
    data(){
        return {
            icons : {
                success: 'fa fa-check-circle',
                info: 'fa fa-info-circle',
                error: 'fas fa-exclamation-circle',
                warn: 'fas fa-exclamation-circle',
            }, 
            isShow : false,
        }
    }, 

    props:{
        title: {
            type : String,
            default : () => 'Information'
        },

        type: {
            type : String, 
            default : () => 'success'
        }, 
        
        duration: {
            type: Number, 
            default : () => 3000
        }
    }, 

    computed:{
        classIcon() {
          return this.icons[this.type]
        }
    },

    mounted() {
        setTimeout (() => {
            this.isShow = true
        }, 2000)
    }, 

    methods:{
        close() {
            this.isShow = false;
        }
    }

};

</script>

<style lang="scss" scoped>

#toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 900;
}

.toast {
  display: flex;
  width: 400px;
  height: 68px;

  margin-top: 10px;
  border-left: 4px solid;
  border-radius: 2px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.8);
  align-items: center;
  padding: 10px;
  transition: all 2s;

  &__body {
    flex-grow: 1;
  }

  /* icon and close */

  &__icon,
  &__close {
    padding: 0 16px;
    font-size: 20px;
  }

  &--success {
    border-color: #47d764;
  }

  &--success &__icon {
    color: #47d764;
  }

  &--info {
    border-color: #2f86eb;
  }

  &--info &__icon {
    color: #2f86eb;
  }
  &--error {
    border-color: #ffc021;
  }
  &--error &__icon {
    color: #ffc021;
  }

  &__close:hover {
    color: #999;
  }

  &__close,
  &__body p {
    color: rgb(207, 202, 202);
  }

  &__body h3,
  &__body p {
    padding: 0;
    line-height: 24px;
    margin: 0;
  }

  & > input[type="checkbox"]:checked #success {
    background-color: green;
  }
}



</style>
