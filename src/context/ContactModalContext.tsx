import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ContactModalContextType {
  isOpen: boolean;
  source: string;
  openContactModal: (source: string) => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('');

  const openContactModal = useCallback((src: string) => {
    setSource(src);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
    setSource('');
    document.body.style.overflow = '';
  }, []);

  return (
    <ContactModalContext.Provider value={{ isOpen, source, openContactModal, closeContactModal }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider');
  return ctx;
}
