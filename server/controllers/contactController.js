const Contact = require('../models/Contact')

// POST /api/contact
const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' })
    }

    const contact = await Contact.create({ name, email, message })

    res.status(201).json({
      success: true,
      message: 'Message received! Tanaya will get back to you soon.',
      data: { id: contact._id, createdAt: contact.createdAt },
    })
  } catch (err) {
    console.error('Contact form error:', err)
    res.status(500).json({ success: false, message: 'Server error. Please try again.' })
  }
}

// GET /api/contact  (protected - for Tanaya to view messages)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, count: contacts.length, data: contacts })
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' })
  }
}

module.exports = { submitContact, getContacts }
