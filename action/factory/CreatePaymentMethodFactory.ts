import AbstractFactory from "@enhavo/app/action/factory/AbstractFactory";
import View from "@enhavo/app/view/view";
import ModalManager from "@enhavo/app/modal/ModalManager";
import Router from "@enhavo/core/Router";
import Translator from "@enhavo/core/Translator";
import CreatePaymentMethodAction from "@enhavo/payment/action/model/CreatePaymentMethodAction";

export default class CreatePaymentMethodFactory extends AbstractFactory
{
    private readonly view: View;
    private readonly modalManager: ModalManager;
    private readonly router: Router;
    private readonly translator: Translator;

    constructor(view: View, router: Router, modalManager: ModalManager, translator: Translator) {
        super();
        this.view = view;
        this.router = router;
        this.modalManager = modalManager;
        this.translator = translator;
    }

    createNew(): CreatePaymentMethodAction {
        return new CreatePaymentMethodAction(this.view, this.router, this.modalManager, this.translator);
    }
}
