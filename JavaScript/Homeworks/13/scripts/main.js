window.addEventListener("load", function () {
    class Phone {
        constructor(diller, model, imageUrl, battery, description, phonesSelector) {
            this.diller = diller;
            this.model = model;
            this.imageUrl = imageUrl;
            this.battery = battery;
            this.description = description;
            this.phonesSelector = phonesSelector;
        }

        asElement() {
            let phone = document.createElement("div");
            phone.className = "phone";
            phone.innerHTML = `
                    <img src="${this.imageUrl}" alt="phone">
                    <button class="detailsBtn">details</button>
                `;
            this.phonesSelector.appendChild(phone);
            return phone;
        }
    }

    class Manager {
        constructor() {
            this.phones = [];
        }

        addPhone(phone) {
            this.phones.push(phone);
        }

        remove(index) {
            this.phones.splice(index, 1);
        }

        getAll() {
            return this.phones
        }
    }

    class PhonesManager extends Manager {
        constructor() {
            super();
            this.init();
        }

        loadComponents() {
            this.selectorList = document.querySelector(".phones");
            this.addBtn = document.querySelector(".add");
            this.inputDillerSelector = document.querySelector("#diller");
            this.inputModelSelector = document.querySelector("#model");
            this.inputImgUrlSelector = document.querySelector("#image");
            this.inputBatterySelector = document.querySelector("#battery");
            this.inputDescriptionSelector = document.querySelector("#desc");
        }

        init() {
            this.loadComponents();
            this.addPhoneBtn();
        }

        addPhoneBtn() {
            this.addBtn.addEventListener("click", () => {
                if (this.inputDillerSelector.value !== "") {
                    let phone = new Phone(
                        this.inputDillerSelector.value, this.inputModelSelector.value, this.inputImgUrlSelector.value, this.inputBatterySelector.value, this.inputDescriptionSelector.value, this.selectorList);
                    this.addPhone(phone);
                    phone.asElement();
                    this.updateView();
                }
            })
        }

        //finished below
        viewPhone() {
            let onOff = true;
            let btn = document.querySelector(".detailsBtn");
            btn.addEventListener("click", (e) => {
                if (e.target.closest(".detailsBtn")) {
                    alert("sdadsd");
                }
            })
        }

        updateView() {
            this.selectorList.innerHTML = "";
            this.getAll().forEach((note, i) => {
                let phoneElem = note.asElement();
                phoneElem.dataset.index = i;
                this.selectorList.appendChild(phoneElem);
            });
            this.viewPhone();
        }

        removePhone(index) {
            this.remove(index);
            this.updateView();
        }

    }

    let phonesManager = new PhonesManager;

});