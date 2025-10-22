import React, { useState } from 'react';

// Form definitions using objects (similar to your original <template> tags)
const formsData = {
    newsletter: {
        title: "Newsletter",
        intro: "📬 Get updates on new drinks, seasonal menus, and exclusive promos—delivered to your inbox.",
        fields: [
            { id: 'newsletterEmail', name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
        ],
        submitText: "Subscribe",
        successMessage: "Subscribed to newsletter!",
    },
    feedback: {
        title: "Feedback",
        intro: "💬 Tell us what you loved and what we can improve—your feedback helps us brew better experiences.",
        fields: [
            { id: 'feedbackName', name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true, minLength: 2 },
            { id: 'feedbackMessage', name: 'message', label: 'Message', type: 'textarea', placeholder: 'Share your thoughts', required: true, minLength: 10 },
        ],
        submitText: "Send",
        successMessage: "Feedback sent! Thank you.",
    },
    reservation: {
        title: "Reservation",
        intro: "📅 Book a table for your next visit so we can prepare a cozy spot right when you arrive.",
        fields: [
            { id: 'resName', name: 'name', label: 'Name', type: 'text', placeholder: 'Full name', required: true, minLength: 2, className: 'half-width' },
            { id: 'resPhone', name: 'phone', label: 'Phone', type: 'tel', placeholder: '09xx xxx xxxx', pattern: '^[0-9+\\-\\s]{7,15}$', required: true, className: 'half-width' },
            { id: 'reservationDate', name: 'datetime', label: 'Date & Time', type: 'datetime-local', required: true, className: 'half-width' },
            { id: 'resGuests', name: 'guests', label: 'Guests', type: 'select', required: true, options: ["1", "2", "3", "4", "5", "6+"], className: 'half-width' },
        ],
        submitText: "Book",
        successMessage: "Reservation request submitted!",
    },
};

const FormModal = ({ kind, isOpen, onClose }) => {
    const formData = formsData[kind];
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen || !formData) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic form validation check (in a real app, this would send data to a server)
        if (e.target.checkValidity()) {
            setIsSubmitted(true);
            setTimeout(() => {
                onClose();
                setIsSubmitted(false);
                e.target.reset();
                alert(formData.successMessage); // Use alert for simplicity here
            }, 1500);
        } else {
            e.target.reportValidity();
        }
    };

    return (
        <div id="formModal" className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
                <span className="close" data-close="formModal" onClick={onClose}>&times;</span>
                <h2 id="formModalTitle">{formData.title}</h2>
                
                <form className="inline-form" onSubmit={handleSubmit} noValidate>
                    <p className="form-intro">{formData.intro}</p>
                    
                    <div className="form-row">
                        {formData.fields.map(field => (
                            <div className={`form-group ${field.className || ''}`} key={field.id}>
                                <label htmlFor={field.id}>{field.label}</label>
                                {field.type === 'textarea' ? (
                                    <textarea 
                                        id={field.id} 
                                        name={field.name} 
                                        placeholder={field.placeholder} 
                                        minLength={field.minLength} 
                                        rows="3" 
                                        required={field.required}
                                    />
                                ) : field.type === 'select' ? (
                                    <select id={field.id} name={field.name} required={field.required}>
                                        <option value="" disabled defaultValue>Guests</option>
                                        {field.options.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input 
                                        type={field.type} 
                                        id={field.id} 
                                        name={field.name} 
                                        placeholder={field.placeholder} 
                                        required={field.required}
                                        pattern={field.pattern}
                                        min={field.min}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <button type="submit" className="form-submit" disabled={isSubmitted}>
                        {isSubmitted ? 'Processing...' : formData.submitText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormModal;