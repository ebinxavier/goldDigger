import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SelectStateComponent } from '../../modals/select-state/select-state.component';
import { DetailsPageComponent } from '../details-page/details-page.component';
import { ScrapeCompaniesService } from '../../services/scrape-companies.service';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-scrape-companies',
    templateUrl: './scrape-companies.component.html',
    styleUrls: ['./scrape-companies.component.css']
})
export class ScrapeCompaniesComponent implements OnInit {

    public currentPage = 'scrape';
    public tabStatus = 'search'; //can be 'upload'
    public states = [];
    public search = '';
    public stateModel = '';
    public stateModelErr = '';
    public emailModel = '';
    public emailModelErr = '';
    public companyNameModel = '';
    public companyNameModelErr = '';
    public submitted = false;
    public selectAll = false;

    @Output() setTitleTab = new EventEmitter<string>();

    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService, private service: ScrapeCompaniesService, private login: LoginService) { }



    ngOnInit() {
        this.setTitleTab.emit('scrape');
        this.service.getStateListing().subscribe(states => {
            for (let i in states) {
                this.states.push({ key: i, value: states[i] });
            }
        })
    }

    openModalWithComponent() {
        const initialState = {
            list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
            ],
            title: 'Modal with component'
        };
        this.bsModalRef = this.modalService.show(SelectStateComponent, { initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    }
    onHide() {
        let selectedStates = this.states
            .filter(s => s.value.action);
        let stateNames = selectedStates.map(s => s.value.name);
        if (stateNames.length <= 4 && stateNames.length>0) {
            this.stateModel = stateNames.reduce((acc, curr) => {
                return acc += ',' + curr;
            })
        }
        else {
            if (stateNames.length != 51)
                this.stateModel = stateNames.length + ' out of 51 selected';
            if (stateNames.length == 0)
                this.stateModel = '';
            if (stateNames.length == 51)
                this.stateModel = 'All selected';

        }
        this.showErrorMessages();
    }
    handleSelectAll(status) {
        this.states.map(state => {
            state.value.action = !status;
        })
    }

    showErrorMessages() {
        if (this.submitted) {
            if (this.emailModel == '')
                this.emailModelErr = "This field is required";
            else if (!this.login.validateEmail(this.emailModel))
                this.emailModelErr = "Please enter a vaild E-mail";
            else this.emailModelErr = "";

            if (this.companyNameModel == '')
                this.companyNameModelErr = "This field is required";
            else this.companyNameModelErr = "";

            if (this.stateModel == '')
                this.stateModelErr = "This field is required";
            else this.stateModelErr = '';
        }

        return this.companyNameModelErr && this.stateModelErr && this.emailModelErr;
    }


    handleSubmit() {
        this.submitted = true;
        this.showErrorMessages();

    }
    handleClear() {
        this.companyNameModel = '';
        this.stateModel = '';
        this.handleSelectAll(true);
        this.selectAll = false;
        this.emailModelErr = '';
        this.companyNameModelErr = '';
        this.stateModelErr = '';

    }
}





