import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

function GiftModal({ bank, buttonLabel }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="button button--secondary gift-section__button">
          {buttonLabel}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <div className="dialog-header">
            <div>
              <Dialog.Title className="dialog-title">
                Datos bancarios
              </Dialog.Title>
            </div>
            <Dialog.Close asChild>
              <button type="button" className="icon-button" aria-label="Cerrar modal">
                <X aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <div className="bank-data">
            <div className="bank-data__item">
              <span>Titular</span>
              <strong>{bank.holder}</strong>
            </div>
            <div className="bank-data__item">
              <span>Alias</span>
              <strong>{bank.alias}</strong>
            </div>
          </div>

          <Dialog.Close asChild>
            <button type="button" className="button button--primary button--full">
              Cerrar
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default GiftModal;
