export interface PopupModal {
    header?: string;
    subHeader?: string;
    content?: string;
    btnAlign?: 'center' | 'start'; // default will be end
    successBtn?: string | boolean; // add here falsey value if you don't want this btn
    cancelBtn?: string | boolean;  // add here falsey value if you don't want this btn
    extraBtn?: string;             // this will only added if this property is set
    successBtnStyles?: object;
    cancelBtnStyles?: object;
    headerStyles?: object;
}